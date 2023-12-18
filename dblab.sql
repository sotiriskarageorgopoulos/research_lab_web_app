DROP DATABASE IF EXISTS dblab;

CREATE SCHEMA `dblab` 
DEFAULT CHARACTER 
SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

USE dblab;

DROP TABLE IF EXISTS Lab;

CREATE TABLE Lab (
	lid VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    l_description TEXT NOT NULL,
    image BLOB NOT NULL,
    university VARCHAR(255) NOT NULL,
    web_page VARCHAR(255) NOT NULL,
    PRIMARY KEY (lid)
);

DROP TABLE IF EXISTS Announcement;

CREATE TABLE Announcement (
	aid VARCHAR(255) NOT NULL,
    lid VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    a_date TIMESTAMP NOT NULL,
    PRIMARY KEY (aid),
    FOREIGN KEY (lid) REFERENCES Lab(lid) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Research_Member;

CREATE TABLE Research_Member (
  academic_id VARCHAR(255) NOT NULL,
  lid VARCHAR(255) NOT NULL,
  r_name VARCHAR(255) NOT NULL,
  r_surname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  web_page VARCHAR(255) NOT NULL,
  tel VARCHAR(10) NOT NULL,
  short_cv TEXT NOT NULL,
  level VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  is_external_member BOOLEAN NOT NULL,
  image BLOB NOT NULL,
  PRIMARY KEY(academic_id),
  FOREIGN KEY(lid) REFERENCES Lab(lid) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Course;

CREATE TABLE Course (
	cid VARCHAR(255) NOT NULL,
    academic_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    c_description TEXT NOT NULL,
    ects INT NOT NULL,
    study_level VARCHAR(255) NOT NULL,
    PRIMARY KEY(cid),
    FOREIGN KEY(academic_id) REFERENCES Research_Member(academic_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Research_Project;

CREATE TABLE Research_Project (
	rpid VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    rp_description TEXT NOT NULL,
    assignment_date DATE NOT NULL,
    is_active BOOLEAN NOT NULL,
    income DECIMAL(15,2),
    PRIMARY KEY (rpid)
);

DROP TABLE IF EXISTS Research_Member_Project;

CREATE TABLE Research_Member_Project (
	academic_id VARCHAR(255) NOT NULL,
    rpid VARCHAR(255) NOT NULL,
    FOREIGN KEY(academic_id) REFERENCES Research_Member(academic_id) ON DELETE CASCADE,
    FOREIGN KEY(rpid) REFERENCES Research_Project(rpid) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Journal;

CREATE TABLE Journal (
	jid VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    j_description VARCHAR(255) NOT NULL,
    web_page VARCHAR(255) NOT NULL,
    scientific_subject VARCHAR(255) NOT NULL,
    PRIMARY KEY(jid)
);

DROP TABLE IF EXISTS Publication;

CREATE TABLE Publication (
	pid VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    p_date TIMESTAMP NOT NULL,
    city VARCHAR(255) NOT NULL,
    PRIMARY KEY(pid)
);

DROP TABLE IF EXISTS Publication_Journal;

CREATE TABLE Publication_Journal (
	jid VARCHAR(255) NOT NULL,
    pid VARCHAR(255) NOT NULL,
    FOREIGN KEY(jid) REFERENCES Journal(jid) ON DELETE CASCADE,
    FOREIGN KEY(pid) REFERENCES Publication(pid) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Research_Member_Publication;

CREATE TABLE Research_Member_Publication (
	pid VARCHAR(255) NOT NULL,
    academic_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(pid) REFERENCES Publication(pid) ON DELETE CASCADE,
    FOREIGN KEY(academic_id) REFERENCES Research_Member(academic_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Academic_Conference;

CREATE TABLE Academic_Conference (
	acid VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    ac_description VARCHAR(255) NOT NULL,
    ac_date TIMESTAMP NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    scientific_subject VARCHAR(255) NOT NULL ,
    PRIMARY KEY(acid)
);

DROP TABLE IF EXISTS Publication_Academic_Conference;

CREATE TABLE Publication_Academic_Conference (
	pid VARCHAR(255) NOT NULL,
    acid VARCHAR(255) NOT NULL,
    FOREIGN KEY (pid) REFERENCES Publication(pid) ON DELETE CASCADE,
    FOREIGN KEY (acid) REFERENCES Academic_Conference(acid) ON DELETE CASCADE 
);

CREATE INDEX research_member_is_external_member ON Research_Member(is_external_member);
CREATE INDEX research_proj_is_active ON Research_Project(is_active);
CREATE INDEX research_member_surname ON Research_Member(r_surname);
CREATE INDEX course_study_level ON Course(study_level);
CREATE INDEX research_member_level ON Research_Member(level);

DELIMITER $$
CREATE TRIGGER before_ins_research_member 
BEFORE INSERT
ON Research_Member 
FOR EACH ROW
BEGIN
    IF NEW.level <> 'Undergraduate Student' AND NEW.level <> 'Postgraduate Student' 
       AND NEW.level <> 'PHD Candidate' AND NEW.level <> 'Postdoctoral Researcher'
       AND NEW.level <> 'Assistant Professor' AND NEW.level <> 'Associate Professor'
       AND NEW.level <> 'Professor' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Invalid study level';
    END IF;
END$$

CREATE TRIGGER before_upd_research_member 
BEFORE UPDATE
ON Research_Member 
FOR EACH ROW
BEGIN
    IF NEW.level <> 'Undergraduate Student' AND NEW.level <> 'Postgraduate Student' 
       AND NEW.level <> 'PHD Candidate' AND NEW.level <> 'Postdoctoral Researcher'
       AND NEW.level <> 'Assistant Professor' AND NEW.level <> 'Associate Professor'
       AND NEW.level <> 'Professor' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Invalid study level';
    END IF;
END$$

CREATE TRIGGER before_ins_course
BEFORE INSERT
ON Course
FOR EACH ROW
BEGIN
    IF NEW.study_level <> 'Undergraduate Program' AND NEW.study_level <> 'Postgraduate Program' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Invalid study level';
    END IF;

    IF NEW.ects > 10 OR NEW.ects < 5 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='ECTS must be from 5 until 10 credits';
    END IF;
END$$

CREATE TRIGGER before_upd_course
BEFORE UPDATE
ON Course
FOR EACH ROW
BEGIN
    IF NEW.study_level <> 'Undergraduate Program' AND NEW.study_level <> 'Postgraduate Program' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Invalid study level';
    END IF;

    IF NEW.ects > 10 OR NEW.ects < 5 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='ECTS must be from 5 until 10 credits';
    END IF;
END$$

CREATE TRIGGER before_ins_research_project 
BEFORE INSERT  
ON Research_Project
FOR EACH ROW 
BEGIN 
    IF NEW.income <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Income must be greater than zero.';
    END IF;
END$$

CREATE TRIGGER before_upd_research_project 
BEFORE UPDATE
ON Research_Project
FOR EACH ROW 
BEGIN 
    IF NEW.income <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Income must be greater than zero.';
    END IF;
END$$

CREATE TRIGGER before_del_publication
BEFORE DELETE
ON Publication
FOR EACH ROW 
BEGIN 
    DECLARE rows_journal INT;
    DECLARE rows_academic_conference INT;
    DECLARE journal_id VARCHAR(255);
    DECLARE academic_conf_id VARCHAR(255);

    SELECT COUNT(*) INTO rows_journal 
    FROM Publication_Journal
    WHERE pid = OLD.pid; 

    SELECT COUNT(*) INTO rows_academic_conference
    FROM Publication_Academic_Conference
    WHERE pid = OLD.pid;

    IF rows_journal = 1 THEN
        SELECT jid INTO journal_id
        FROM Publication_Journal
        WHERE pid = OLD.pid;

        DELETE FROM Journal
        WHERE jid = journal_id;
    ELSEIF rows_academic_conference = 1 THEN
        SELECT acid INTO academic_conf_id
        FROM Publication_Academic_Conference 
        WHERE pid = OLD.pid;

        DELETE FROM Academic_Conference
		WHERE acid = academic_conf_id;
    END IF;
END$$

CREATE TRIGGER before_del_research_member
BEFORE DELETE
ON Research_Member
FOR EACH ROW
BEGIN
    DECLARE rm_rows INT;
    DECLARE lab_id VARCHAR(255);

    SELECT COUNT(*) INTO rm_rows
    FROM Research_Member
    WHERE OLD.lid = lid;

    IF rm_rows = 1 THEN
        DELETE FROM Lab
        WHERE lid = OLD.lid;
    END IF;
END$$

DROP PROCEDURE IF EXISTS get_publications$$
#1,2
CREATE PROCEDURE get_publications(IN choice VARCHAR(255)) 
BEGIN
    START TRANSACTION;
        IF choice = 'journal' THEN
            SELECT P.title, P.p_date
            FROM Publication AS P
            INNER JOIN Publication_Journal AS PJ
            ON P.pid = PJ.pid
            INNER JOIN Journal AS J
            ON PJ.jid = J.jid
            ORDER BY P.p_date DESC; 
        ELSEIF choice = 'academic_conference' THEN
            SELECT P.title, P.p_date
            FROM Publication AS P
            INNER JOIN Publication_Academic_Conference AS PAC
            ON P.pid = PAC.pid
            INNER JOIN Academic_Conference AS AC
            ON AC.acid = PAC.acid
            ORDER BY P.p_date DESC;
        ELSE 
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='choice must be journal or academic_conference';
            ROLLBACK;
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_research_projects$$
#3,21,22
CREATE PROCEDURE get_research_projects(IN choice VARCHAR(255))
BEGIN
    START TRANSACTION;
        IF choice = 'active_projects' THEN
            SELECT RP.rpid, RP.title, RP.is_active ,RP.assignment_date
            FROM Research_Project AS RP
            WHERE RP.is_active = 1;
        ELSEIF choice = 'desc_order_by_income' THEN
            SELECT RP.rpid, RP.title, RP.is_active, RP.assignment_date
            FROM Research_Project AS RP
            ORDER BY RP.income DESC;
        ELSEIF choice = 'asc_order_by_income' THEN
            SELECT RP.rpid, RP.title, RP.is_active, RP.assignment_date
            FROM Research_Project AS RP
            ORDER BY RP.income;
        ELSE
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='choice must be active_projects or desc_order_by_income or asc_order_by_income';
            ROLLBACK;
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_project_by_researcher$$
#42,6
CREATE PROCEDURE get_project_by_researcher(IN academic_id VARCHAR(255),IN choice VARCHAR(255)) 
BEGIN
    START TRANSACTION;
        IF choice = 'desc' THEN
            SELECT RP.assignment_date, RP.title
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Project AS RMP 
            ON RM.academic_id = RMP.academic_id
            INNER JOIN Research_Project AS RP
            ON RP.rpid = RMP.rpid
            WHERE RM.academic_id = academic_id
            ORDER BY RP.assignment_date DESC;
        ELSEIF choice = 'per_assignment_date' THEN
            SELECT RP.assignment_date, RP.title, RP.is_active
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Project AS RMP
            ON RM.academic_id = RMP.academic_id
            INNER JOIN Research_Project AS RP
            ON RMP.rpid = RP.rpid
            WHERE RM.academic_id = academic_id
            GROUP BY RP.assignment_date;
        ELSE 
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='choice must be desc or per_assignment_date';
            ROLLBACK;
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_announcements$$
#4,30
CREATE PROCEDURE get_announcements(IN choice VARCHAR(255)) 
BEGIN 
    START TRANSACTION;
        IF choice = 'all' THEN
            SELECT *
            FROM Announcement;
        ELSEIF choice = 'five_recent_announcements' THEN
            SELECT A.aid, A.title, A.a_date
            FROM Announcement AS A
            ORDER BY A.a_date DESC
            LIMIT 5;
        ELSE
           SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='choice must be all or five_recent_announcements';
           ROLLBACK;  
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_publications_of_member$$
#7,8
CREATE PROCEDURE get_publications_of_member(IN academic_id VARCHAR(255), IN choice VARCHAR(255)) 
BEGIN 
    START TRANSACTION;
        IF choice = 'asc' THEN
            SELECT P.p_date, P.title, P.pid
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Publication AS RMP 
            ON RM.academic_id = RMP.academic_id
            INNER JOIN Publication AS P
            ON RMP.pid = P.pid
            WHERE RM.academic_id = academic_id
            ORDER BY P.p_date;
        ELSEIF choice = 'desc' THEN
            SELECT P.p_date, P.title, P.pid
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Publication AS RMP 
            ON RM.academic_id = RMP.academic_id
            INNER JOIN Publication AS P
            ON RMP.pid = P.pid
            WHERE RM.academic_id = academic_id
            ORDER BY P.p_date DESC;
        ELSE 
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='choice must be desc or asc';
            ROLLBACK;  
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_publications_per_journal$$
#9
CREATE PROCEDURE get_publications_per_journal(IN academic_id VARCHAR(255))
BEGIN
    START TRANSACTION;
        SELECT J.title, COUNT(*) AS "publications"
        FROM Research_Member AS RM
        INNER JOIN Research_Member_Publication AS RMP 
        ON RMP.academic_id = RM.academic_id
        INNER JOIN Publication AS P
        ON RMP.pid = P.pid
        INNER JOIN Publication_Journal AS PJ
        ON P.pid = PJ.pid
        INNER JOIN Journal AS J
        ON J.jid = PJ.jid
        WHERE RM.academic_id = academic_id
        GROUP BY J.title;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_common_publications$$
#10
CREATE PROCEDURE get_common_publications(IN first_academic_id VARCHAR(255), IN second_academic_id VARCHAR(255))
BEGIN
    START TRANSACTION;
        DROP VIEW IF EXISTS Research_Member_Pub_View;

        CREATE VIEW Research_Member_Pub_View AS
            SELECT P.title, P.p_date, P.pid, RM.academic_id
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Publication AS RMP
            ON RM.academic_id = RMP.academic_id
            INNER JOIN Publication AS P
            ON P.pid = RMP.pid;

        SELECT *
        FROM Research_Member_Pub_View AS RMPV
        WHERE RMPV.academic_id = first_academic_id AND RMPV.pid IN (
            SELECT RMP.pid 
            FROM Research_Member_Publication AS RMP
            WHERE RMP.academic_id = second_academic_id
        );
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_research_members$$
#11,14,24,37
CREATE PROCEDURE get_research_members(IN choice VARCHAR(255))
BEGIN
    START TRANSACTION;
        IF choice = 'at_least_one_course' THEN
            SELECT RM.academic_id, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname, RM.level
            FROM Research_Member AS RM
            INNER JOIN Course AS C
            ON RM.academic_id = C.academic_id
            GROUP BY RM.academic_id
            HAVING COUNT(*) >= 1;
        ELSEIF choice = 'at_least_one_publication' THEN
            SELECT RM.academic_id, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname, RM.level
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Publication AS RMP
            ON RM.academic_id = RMP.academic_id
            INNER JOIN Publication AS P
            ON RMP.pid = P.pid
            GROUP BY RM.academic_id
            HAVING COUNT(*) >= 1;
        ELSEIF choice = 'not_have_projects' THEN
            SELECT RM.level, RM.academic_id, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname
            FROM Research_Member AS RM
            WHERE RM.academic_id NOT IN (SELECT R.academic_id
                                        FROM Research_Member_Project AS R);
        ELSEIF choice = 'not_have_publications' THEN
            SELECT RM.level, RM.academic_id, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname
            FROM Research_Member AS RM
            WHERE RM.academic_id NOT IN (SELECT R.academic_id
                                        FROM Research_Member_Publication AS R);
        ELSE 
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='choice is wrong...';
            ROLLBACK;
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_research_member$$
#15,16,19,35
CREATE PROCEDURE get_research_member(IN choice VARCHAR(255))
BEGIN
    START TRANSACTION;
        IF choice = 'max_publications' OR choice = 'min_publications' THEN
            DROP VIEW IF EXISTS Academic_Publications;

            CREATE VIEW Academic_Publications AS
            SELECT RM.academic_id,RM.level, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname, COUNT(*) AS 'publications'
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Publication AS RMP
            ON RM.academic_id = RMP.academic_id
            GROUP BY RM.academic_id;
        END IF;

        IF choice = 'min_projects' OR choice = 'external_max_projects' THEN
            DROP VIEW IF EXISTS Academic_Projects;
            
            CREATE VIEW Academic_Projects AS
            SELECT RM.academic_id, RM.level, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname, RM.is_external_member,COUNT(*) AS 'projects'
            FROM Research_Member AS RM
            INNER JOIN Research_Member_Project AS RMP
            ON RMP.academic_id = RM.academic_id
            GROUP BY RM.academic_id;
        END IF;

        IF choice = 'max_publications' THEN
            SELECT AP.academic_id, AP.level, AP.tel, AP.email, AP.image, AP.r_name, AP.r_surname, AP.publications
            FROM Academic_Publications AS AP
            WHERE AP.publications IN (SELECT MAX(A.publications) 
                                    FROM Academic_Publications AS A)
			LIMIT 1;
        ELSEIF choice = 'min_publications' THEN
            SELECT AP.academic_id, AP.level, AP.tel, AP.email, AP.image, AP.r_name, AP.r_surname, AP.publications
            FROM Academic_Publications AS AP
            WHERE AP.publications IN (SELECT MIN(A.publications) 
                                    FROM Academic_Publications AS A)
			LIMIT 1;
        ELSEIF choice = 'min_projects' THEN
            SELECT A.academic_id, A.level, A.tel, A.email, A.image, A.r_name, A.r_surname, A.projects
            FROM Academic_Projects AS A
            WHERE A.projects IN (SELECT MIN(AP.projects)
                                FROM Academic_Projects AS AP)
			LIMIT 1;
        ELSEIF choice = 'external_max_projects' THEN
            SELECT A.academic_id, A.level, A.tel, A.email, A.image, A.r_name, A.r_surname, A.projects
            FROM Academic_Projects AS A
            WHERE A.is_external_member = 1 AND A.projects IN (SELECT MAX(AP.projects)
                                                                FROM Academic_Projects AS AP
                                                                WHERE A.is_external_member = 1)
		   LIMIT 1;
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_researcher_by_course$$
#46
CREATE PROCEDURE get_researcher_by_course(IN course_id VARCHAR(255))
BEGIN
    START TRANSACTION;
        SELECT RM.academic_id,RM.level, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname
        FROM Course AS C
        INNER JOIN Research_Member AS RM
        ON C.academic_id = RM.academic_id
        WHERE C.cid = course_id;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_statistics$$
#17,18,20,25,26,27,28,29,31,32,33
CREATE PROCEDURE get_statistics(IN choice VARCHAR(255))
BEGIN
    START TRANSACTION;
        IF choice = 'income_per_year' OR choice = 'year_with_min_income' OR choice = 'year_with_max_income' THEN
            DROP VIEW IF EXISTS Income_Each_Year_View;
            CREATE VIEW Income_Each_Year_View AS
                SELECT YEAR(RP.assignment_date) AS 'assignment_year', SUM(RP.income) AS 'income_each_year'
                FROM Research_Project AS RP
                GROUP BY YEAR(RP.assignment_date);
        END IF;

        IF choice = 'publications_per_year' THEN
            SELECT YEAR(P.p_date) AS 'year', COUNT(*) AS 'publications'
            FROM Publication AS P
            GROUP BY YEAR(P.p_date)
            ORDER BY YEAR(P.p_date) DESC;
        ELSEIF choice = 'total_publications' THEN
            SELECT COUNT(*) AS 'publications'
            FROM Publication AS P;
        ELSEIF choice = 'total_income' THEN
            SELECT SUM(RP.income) AS 'total_income'
            FROM Research_Project AS RP;
        ELSEIF choice = 'income_per_year' THEN
            SELECT * 
            FROM Income_Each_Year_View
            ORDER BY assignment_year DESC;
        ELSEIF choice = 'year_with_min_income' THEN
            SELECT assignment_year, income_each_year
            FROM Income_Each_Year_View
            WHERE income_each_year IN (SELECT MIN(income_each_year)
                                    FROM Income_Each_Year_View);
        ELSEIF choice = 'year_with_max_income' THEN
            SELECT assignment_year, income_each_year
            FROM Income_Each_Year_View
            WHERE income_each_year IN (SELECT MAX(income_each_year)
                                    FROM Income_Each_Year_View);
        ELSEIF choice = 'total_members' THEN
            SELECT COUNT(*) AS 'members'
            FROM Research_Member;
        ELSEIF choice = 'members_per_level' THEN
            SELECT RM.level, COUNT(*) AS 'members'
            FROM Research_Member AS RM
            GROUP BY RM.level;
        ELSEIF choice = 'university_benefits' THEN
            SELECT SUM(RP.income * 0.3) AS 'university_benefits'
            FROM Research_Project AS RP;
        ELSEIF choice = 'university_benefits_per_year' THEN 
            SELECT YEAR(RP.assignment_date) AS 'assignment_year' ,SUM(RP.income * 0.3) AS 'university_benefits'
            FROM Research_Project AS RP
            GROUP BY YEAR(RP.assignment_date);
        ELSEIF choice = 'count_external_members' THEN
            SELECT COUNT(*) AS 'members'
            FROM Research_Member AS RM
            WHERE RM.is_external_member = 1;
        ELSEIF choice = 'project_with_max_income' THEN 
            SELECT * 
            FROM Research_Project AS RP
            WHERE RP.income IN (SELECT MAX(income)
                                        FROM Research_Project);
        ELSEIF choice = 'project_with_min_income' THEN  
            SELECT * 
            FROM Research_Project AS RP
            WHERE RP.income IN (SELECT MIN(income)
                                        FROM Research_Project);
        ELSE 
           SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='wrong choice...';
           ROLLBACK;  
        END IF;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_conferences_for_publication$$
#49
CREATE PROCEDURE get_conferences_for_publication(IN pub_id VARCHAR(255))
BEGIN
    START TRANSACTION;
        SELECT A.title, A.ac_description, A.ac_date, A.city, A.country, A.scientific_subject
        FROM Academic_Conference AS A
        INNER JOIN Publication_Academic_Conference AS PAC
        ON A.acid = PAC.acid
        INNER JOIN Publication AS P
        ON P.pid = PAC.pid
        WHERE P.pid = pub_id;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_journals_of_publication$$ 

#48
CREATE PROCEDURE get_journals_of_publication(IN pub_id VARCHAR(255)) 
BEGIN  
    START TRANSACTION;
        SELECT J.title, J.j_description, J.web_page, J.scientific_subject
        FROM Journal AS J
        INNER JOIN Publication_Journal AS PJ
        ON PJ.jid = J.jid
        INNER JOIN Publication AS P
        ON P.pid = PJ.pid
        WHERE P.pid = pub_id;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_labs_of_member$$

#43
CREATE PROCEDURE get_labs_of_member(IN academic_id VARCHAR(255))
BEGIN 
    START TRANSACTION;
        SELECT L.title,L.university,L.web_page,L.image
        FROM Research_Member AS RM
        INNER JOIN Lab AS L
        ON L.lid = RM.lid
        WHERE RM.academic_id = academic_id;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS get_members_of_project$$

#44
CREATE PROCEDURE get_members_of_project(IN rpid VARCHAR(255)) 
BEGIN 
    START TRANSACTION;
        SELECT RM.academic_id, RM.tel, RM.email, RM.image, RM.r_name, RM.r_surname, RM.level
        FROM Research_Project AS RP 
        INNER JOIN Research_Member_Project AS RMP
        ON RP.rpid = RMP.rpid
        INNER JOIN Research_Member AS RM
        ON RM.academic_id = RMP.academic_id
        WHERE RP.rpid = rpid;
    COMMIT;
END$$

DROP FUNCTION if EXISTS generate_name$$

CREATE FUNCTION generate_name() RETURNS VARCHAR(255)
NO SQL
NOT DETERMINISTIC
BEGIN
	RETURN ELT(FLOOR(1 + RAND() * (100-1)), "James","Mary","John","Patricia","Robert","Linda","Michael","Barbara","William","Elizabeth","David","Jennifer","Richard","Maria","Charles","Susan","Joseph","Margaret","Thomas","Dorothy","Christopher","Lisa","Daniel","Nancy","Paul","Karen","Mark","Betty","Donald","Helen","George","Sandra","Kenneth","Donna","Steven","Carol","Edward","Ruth","Brian","Sharon","Ronald","Michelle","Anthony","Laura","Kevin","Sarah","Jason","Kimberly","Matthew","Deborah","Gary","Jessica","Timothy","Shirley","Jose","Cynthia","Larry","Angela","Jeffrey","Melissa","Frank","Brenda","Scott","Amy","Eric","Anna","Stephen","Rebecca","Andrew","Virginia","Raymond","Kathleen","Gregory","Pamela","Joshua","Martha","Jerry","Debra","Dennis","Amanda","Walter","Stephanie","Patrick","Carolyn","Peter","Christine","Harold","Marie","Douglas","Janet","Henry","Catherine","Carl","Frances","Arthur","Ann","Ryan","Joyce","Roger","Diane");
END$$

DROP FUNCTION IF EXISTS generate_surname$$

CREATE FUNCTION generate_surname() RETURNS VARCHAR(255)
NO SQL
NOT DETERMINISTIC
BEGIN
    RETURN ELT(FLOOR(1 + RAND() * (100-1)), "Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes");
END$$

DROP FUNCTION IF EXISTS generate_level$$

CREATE FUNCTION generate_level() RETURNS VARCHAR(255)
NO SQL
NOT DETERMINISTIC
BEGIN
    RETURN ELT(CEILING(0.5 + RAND() * (7-1)), "Undergraduate Student","Postgraduate Student","PHD Candidate","Postdoctoral Researcher","Assistant Professor","Associate Professor","Professor");
END$$

CREATE FUNCTION generate_study_level() RETURNS VARCHAR(255)
NO SQL
NOT DETERMINISTIC
BEGIN
    RETURN ELT(CEILING(0.5 + RAND()),"Undergraduate Program","Postgraduate Program");
END$$

DROP FUNCTION IF EXISTS generate_string$$

CREATE FUNCTION generate_string() RETURNS VARCHAR(255)
NO SQL
NOT DETERMINISTIC
BEGIN
    DECLARE chars,string VARCHAR(255);
    DECLARE chars_length INT;
    SET chars = 'abcdefghijklmnopqrstuvwxyz';
    SET chars_length = LENGTH(chars);
    SET string = '';
    WHILE LENGTH(string) <= 10 DO
        SET string = CONCAT(string,SUBSTRING(chars,CEILING(RAND() * chars_length),1));
    END WHILE;   
    RETURN string;
END$$

DROP FUNCTION IF EXISTS generate_big_string$$

CREATE FUNCTION generate_big_string() RETURNS TEXT 
NO SQL
NOT DETERMINISTIC
BEGIN
    DECLARE chars VARCHAR(255);
    DECLARE chars_length INT;
    DECLARE string TEXT;
    SET chars = 'abcdefghijklmnopqrstuvwxyz ';
    SET chars_length = LENGTH(chars);
    SET string = '';
    WHILE LENGTH(string) <= 300 DO
        SET string = CONCAT(string,SUBSTRING(chars,CEILING(RAND() * chars_length),1));
    END WHILE;
    RETURN string;
END$$

DROP FUNCTION IF EXISTS generate_tel$$

CREATE FUNCTION generate_tel() RETURNS VARCHAR(10)
NO SQL
NOT DETERMINISTIC
BEGIN
    DECLARE digits VARCHAR(10);
    DECLARE tel VARCHAR(10);
    DECLARE digits_length INT;
    SET digits = '0123456789';
    SET digits_length = LENGTH(digits);
    SET tel = '';
    WHILE LENGTH(tel) < 10 DO
        SET tel = CONCAT(tel,SUBSTRING(digits,CEILING(RAND() * digits_length),1));
    END WHILE;
    RETURN tel;
END$$

DROP FUNCTION IF EXISTS generate_lab_image$$

CREATE FUNCTION generate_lab_image(position INT) RETURNS BLOB
NO SQL
DETERMINISTIC
BEGIN
    RETURN ELT(position, 
    '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'
    );
END$$

DROP FUNCTION IF EXISTS generate_researcher_image$$

CREATE FUNCTION generate_researcher_image() RETURNS BLOB 
NO SQL
DETERMINISTIC
BEGIN
    RETURN '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';
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_announcement$$

CREATE PROCEDURE ins_rows_to_announcement() 
BEGIN
    DECLARE counter INT;
    DECLARE aid,lid,title VARCHAR(255);
    DECLARE content TEXT;
    DECLARE a_date TIMESTAMP;
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text := 'INSERT INTO Announcement VALUES ';
        SET @ins_values ='';
        insert_loop: LOOP 
            SET aid = CONCAT('A',counter);
            SET lid = 'L1';
            SET title = generate_string();
            SET content = generate_big_string();
            SET a_date = (SELECT TIMESTAMP('2021-12-31 20:00:00') - INTERVAL FLOOR(RAND() * 365) DAY);
            
            IF counter = 39 THEN
                SET @ins_values = CONCAT(@ins_values,"('",aid,"','",lid,"','",title,"','",content,"','",a_date,"');");
                SET @sql_text := CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE  
                SET @ins_values = CONCAT(@ins_values,"('",aid,"','",lid,"','",title,"','",content,"','",a_date,"'),");
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS insert_rows_to_lab$$

CREATE PROCEDURE ins_rows_to_lab()
BEGIN
    DECLARE counter INT;
    DECLARE lid, title, university, web_page VARCHAR(255);
    DECLARE image BLOB;
    DECLARE l_description TEXT;
    START TRANSACTION;
        SET counter = 1;
        SET @sql_text = 'INSERT INTO Lab VALUES ';
        SET @ins_values = '';

        insert_loop: LOOP
            SET lid = CONCAT('L',counter);
            SET title = generate_string();
            SET l_description = generate_big_string();
            SET image = generate_lab_image(counter);
            SET university = generate_string();
            SET web_page = CONCAT('https://',generate_string(),".com");

            IF counter = 4 THEN
                SET @ins_values = CONCAT(@ins_values,"('",lid,"','",title,"','",l_description,"','",image,"','",university,"','",web_page,"');");
                SET @sql_text = CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE 
                SET @ins_values = CONCAT(@ins_values,"('",lid,"','",title,"','",l_description,"','",image,"','",university,"','",web_page,"'),");
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_research_member$$

CREATE PROCEDURE ins_rows_to_research_member()
BEGIN
    DECLARE counter INT;
    DECLARE academic_id, r_name, r_surname, web_page, email, level, address VARCHAR(255);
    DECLARE tel VARCHAR(10);
    DECLARE is_external_member TINYINT(1);
    DECLARE image BLOB;
    DECLARE short_cv TEXT;
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Research_Member VALUES ';
        SET @ins_values = '';
        insert_loop: LOOP
            SET academic_id = CONCAT('R',counter);
            SET r_name = generate_name();
            SET r_surname = generate_surname();
            SET tel = generate_tel();
            SET web_page = CONCAT('http://',generate_string(),'.com');
            SET email = CONCAT(generate_string(),"@domain.com");
            SET short_cv = generate_big_string();
            SET address = generate_string();
            SET level = generate_level();
            IF level = 'Undergraduate Student' OR level = 'Postgraduate Student' OR level = 'PHD Candidate' THEN 
                SET is_external_member = 0;
            ELSE 
                SET is_external_member = ROUND(RAND());
            END IF;
            SET @lid = '';
            IF is_external_member = 0 THEN
                SET @lid = 'L1';
            ELSE 
                SELECT lid INTO @lid
                FROM Lab
                WHERE lid <> 'L1'
                ORDER BY RAND() 
                LIMIT 1;
            END IF;
            SET image = generate_researcher_image();
            
            IF counter = 29 THEN
                SET @ins_values = CONCAT(@ins_values,"('",academic_id,"','",@lid,"','",r_name,"','",r_surname,"','",email,"','",web_page,"','",tel,"','",short_cv,"','",level,"','",address,"',",is_external_member,",'",image,"');");
                SET @sql_text = CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE 
                SET @ins_values = CONCAT(@ins_values,"('",academic_id,"','",@lid,"','",r_name,"','",r_surname,"','",email,"','",web_page,"','",tel,"','",short_cv,"','",level,"','",address,"',",is_external_member,",'",image,"'),");
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_res_project$$

CREATE PROCEDURE ins_rows_to_res_project()
BEGIN
    DECLARE counter INT;
    DECLARE rp_description TEXT;
    DECLARE rpid, title VARCHAR(255);
    DECLARE assignment_date DATE;
    DECLARE income DECIMAL(15,2);
    DECLARE is_active BOOLEAN;
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Research_Project VALUES ';
        SET @ins_values = '';
        insert_loop: LOOP
            SET rpid = CONCAT('RP',counter);
            SET title = generate_string();
            SET rp_description = generate_big_string();
            SET assignment_date = (SELECT DATE('2019-07-31') - INTERVAL FLOOR(RAND() * 365) DAY);
            SET is_active = ROUND(RAND());
            SET income = ROUND(10000 + RAND()*100000000);

            IF counter = 14 THEN
                SET @ins_values = CONCAT(@ins_values,"('",rpid,"','",title,"','",rp_description,"','",assignment_date,"',",is_active,",",income,");"); 
                SET @sql_text = CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE 
                SET @ins_values = CONCAT(@ins_values,"('",rpid,"','",title,"','",rp_description,"','",assignment_date,"',",is_active,",",income,"),"); 
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_course$$

CREATE PROCEDURE ins_rows_to_course()
BEGIN
    DECLARE counter INT;
    DECLARE c_description TEXT;
    DECLARE cid, title, study_level VARCHAR(255);
    DECLARE ects INT;
    START TRANSACTION;
        SET counter = 0; 
        SET @sql_text = 'INSERT INTO Course VALUES ';
        SET @ins_values = ''; 
        insert_loop: LOOP 
            SET cid = CONCAT('C',counter);

            SELECT academic_id INTO @academic_id
            FROM Research_Member AS RM
            WHERE RM.is_external_member = 0 AND (RM.level = 'Assistant Professor' OR RM.level = 'Associate Professor' OR RM.level = 'Professor')
            ORDER BY RAND() 
            LIMIT 1;

            SET title = generate_string();
            SET c_description = generate_big_string();
            SET ects = ROUND(5+ RAND()*5);
            SET study_level = generate_study_level();

            IF counter = 14 THEN
                SET @ins_values = CONCAT(@ins_values, "('",cid,"','",@academic_id,"','",title,"','",c_description,"',",ects,",'",study_level,"');");
                SET @sql_text = CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE 
                SET @ins_values = CONCAT(@ins_values, "('",cid,"','",@academic_id,"','",title,"','",c_description,"',",ects,",'",study_level,"'),");
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_journal$$

CREATE PROCEDURE ins_rows_to_journal()
BEGIN 
    DECLARE counter INT;
    DECLARE j_description TEXT;
    DECLARE title, jid, web_page, scientific_subject VARCHAR(255);
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Journal VALUES ';
        SET @ins_values = '';

        insert_loop: LOOP
            SET jid = CONCAT('J',counter);
            SET title = generate_string();
            SET j_description = generate_string();
            SET web_page = CONCAT('https://',generate_string(),'.com');
            SET scientific_subject = generate_string();

            IF counter = 4 THEN 
                SET @ins_values =  CONCAT(@ins_values, "('",jid,"','",title,"','",j_description,"','",web_page,"','",scientific_subject,"');");
                SET @sql_text = CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE  
                SET @ins_values =  CONCAT(@ins_values, "('",jid,"','",title,"','",j_description,"','",web_page,"','",scientific_subject,"'),");
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_academic_conf$$

CREATE PROCEDURE ins_rows_to_academic_conf() 
BEGIN
    DECLARE counter INT;
    DECLARE ac_date TIMESTAMP;
    DECLARE acid, title, ac_description, city, country, scientific_subject VARCHAR(255);
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Academic_Conference VALUES ';
        SET @ins_values = '';

        insert_loop: LOOP 
            SET acid = CONCAT('AC',counter); 
            SET title = generate_string();
            SET ac_description = generate_string();
            SET ac_date = (SELECT TIMESTAMP('2021-12-31 20:00:00') - INTERVAL FLOOR(RAND() * 365) DAY);
            SET city = generate_string();
            SET country = generate_string();
            SET scientific_subject = generate_string();

            IF counter = 9 THEN 
                SET @ins_values = CONCAT(@ins_values, "('",acid,"','",title,"','",ac_description,"','",ac_date,"','",city,"','",country,"','",scientific_subject,"');");
                SET @sql_text = CONCAT(@sql_text,@ins_values);
                PREPARE stmt FROM @sql_text;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
                LEAVE insert_loop;
            ELSE 
                SET @ins_values = CONCAT(@ins_values, "('",acid,"','",title,"','",ac_description,"','",ac_date,"','",city,"','",country,"','",scientific_subject,"'),");
            END IF;

            SET counter = counter + 1;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_rows_to_publication$$

CREATE PROCEDURE ins_rows_to_publication() 
BEGIN 
   DECLARE counter INT;
   DECLARE content TEXT;
   DECLARE pid, academic_id, city VARCHAR(255);
   DECLARE p_date TIMESTAMP;
   START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Publication VALUES ';
        SET @ins_values = ''; 

        insert_loop: LOOP
                SET pid = CONCAT('P',counter);
                SET academic_id = generate_string();
                SET content = generate_big_string();
                SET p_date = (SELECT TIMESTAMP('2021-07-31 20:00:00') - INTERVAL 5 * FLOOR(RAND() * 365) DAY);
                SET city = generate_string();

                IF counter = 49 THEN 
                    SET @ins_values = CONCAT(@ins_values, "('",pid,"','",academic_id,"','",content,"','",p_date,"','",city,"');");
                    SET @sql_text = CONCAT(@sql_text,@ins_values);
                    PREPARE stmt FROM @sql_text;
                    EXECUTE stmt;
                    DEALLOCATE PREPARE stmt;
                    LEAVE insert_loop;
                ELSE 
                    SET @ins_values = CONCAT(@ins_values, "('",pid,"','",academic_id,"','",content,"','",p_date,"','",city,"'),");
                END IF;    

                SET counter = counter + 1; 
        END LOOP;
   COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_to_res_member_project$$

CREATE PROCEDURE ins_to_res_member_project() 
BEGIN 
    DECLARE counter, rows_count INT;
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Research_Member_Project VALUES ';
        SET @ins_values = ''; 

        insert_loop: LOOP 
            SELECT academic_id INTO @academic_id
            FROM Research_Member 
            ORDER BY RAND()
            LIMIT 1;

            SELECT rpid INTO @rpid
            FROM Research_Project
            ORDER BY RAND()
            LIMIT 1;

            SET rows_count = (SELECT COUNT(*) 
                    FROM Research_Member_Project AS RMP
                    WHERE RMP.academic_id = @academic_id AND RMP.rpid = @rpid);
            IF rows_count = 0 THEN
                IF counter = 49 THEN
                    SET @ins_values = CONCAT(@ins_values, "('",@academic_id,"','",@rpid,"');");
                    SET @sql_text = CONCAT(@sql_text,@ins_values);
                    PREPARE stmt FROM @sql_text;
                    EXECUTE stmt;
                    DEALLOCATE PREPARE stmt;
                    LEAVE insert_loop;
                ELSE  
                    SET @ins_values = CONCAT(@ins_values, "('",@academic_id,"','",@rpid,"'),");
                END IF;
                SET counter = counter + 1;
            END IF;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_to_res_member_pub$$

CREATE PROCEDURE ins_to_res_member_pub() 
BEGIN 
    DECLARE counter, rows_count INT;
    START TRANSACTION;
        SET counter = 0;
        SET @sql_text = 'INSERT INTO Research_Member_Publication VALUES ';
        SET @ins_values = ''; 

        insert_loop: LOOP
            SELECT pid INTO @pid 
            FROM Publication
            ORDER BY RAND()
            LIMIT 1;

            SELECT academic_id INTO @academic_id
            FROM Research_Member
            ORDER BY RAND()
            LIMIT 1;

            SET rows_count = (SELECT COUNT(*)
                            FROM Research_Member_Publication AS RMP
                            WHERE RMP.academic_id = @academic_id AND RMP.pid = @pid);
            IF rows_count = 0 THEN
                IF counter = 199 THEN 
                    SET @ins_values = CONCAT(@ins_values,"('",@pid,"','",@academic_id,"');");
                    SET @sql_text = CONCAT(@sql_text,@ins_values);
                    PREPARE stmt FROM @sql_text;
                    EXECUTE stmt;
                    DEALLOCATE PREPARE stmt;
                    LEAVE insert_loop;
                ELSE 
                    SET @ins_values = CONCAT(@ins_values,"('",@pid,"','",@academic_id,"'),");
                END IF;
                SET counter = counter + 1;
            END IF;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_pub_journal$$

CREATE PROCEDURE ins_pub_journal() 
BEGIN 
    DECLARE counter, rows_count INT;
    START TRANSACTION;
        SET counter = 0; 
        SET @sql_text = 'INSERT INTO Publication_Journal VALUES ';
        SET @ins_values = '';
        insert_loop: LOOP
            SELECT jid INTO @jid
            FROM Journal
            ORDER BY RAND()
            LIMIT 1;

            SELECT pid INTO @pid
            FROM Publication
            ORDER BY RAND()
            LIMIT 1;

            SET rows_count = (SELECT COUNT(*) 
                            FROM Publication_Journal AS PJ 
                            WHERE PJ.jid = @jid AND PJ.pid = @pid);
            IF rows_count = 0 THEN
                IF counter = 200 THEN 
                    SET @ins_values = CONCAT(@ins_values,"('",@jid,"','",@pid,"');");
                    SET @sql_text = CONCAT(@sql_text,@ins_values);
                    PREPARE stmt FROM @sql_text;
                    EXECUTE stmt;
                    DEALLOCATE PREPARE stmt;
                    LEAVE insert_loop;
                ELSE 
                    SET @ins_values = CONCAT(@ins_values,"('",@jid,"','",@pid,"'),");
                END IF;
                SET counter = counter + 1;
            END IF;
        END LOOP;
    COMMIT;
END$$

DROP PROCEDURE IF EXISTS ins_pub_ac_conf$$

CREATE PROCEDURE ins_pub_ac_conf() 
BEGIN 
    DECLARE counter, rows_count INT;
    START TRANSACTION;
        SET counter = 0; 
        SET @sql_text = 'INSERT INTO Publication_Academic_Conference VALUES ';
        SET @ins_values = '';
        insert_loop: LOOP
            SELECT pid INTO @pid
            FROM Publication
            ORDER BY RAND()
            LIMIT 1;

            SELECT acid INTO @acid
            FROM Academic_Conference
            ORDER BY RAND()
            LIMIT 1;

            SET rows_count = (SELECT COUNT(*) 
                            FROM Publication_Academic_Conference AS PAC 
                            WHERE PAC.pid = @pid AND PAC.acid = @acid);

            IF rows_count = 0 THEN
                IF counter = 30 THEN 
                    SET @ins_values = CONCAT(@ins_values,"('",@pid,"','",@acid,"');");
                    SET @sql_text = CONCAT(@sql_text,@ins_values);
                    PREPARE stmt FROM @sql_text;
                    EXECUTE stmt;
                    DEALLOCATE PREPARE stmt;
                    LEAVE insert_loop;
                ELSE  
                    SET @ins_values = CONCAT(@ins_values,"('",@pid,"','",@acid,"'),");
                END IF;
                SET counter = counter + 1;
            END IF;
        END LOOP;
    COMMIT;
END$$

CALL ins_rows_to_res_project()$$
CALL ins_rows_to_lab()$$
CALL ins_rows_to_announcement()$$
CALL ins_rows_to_research_member()$$
CALL ins_rows_to_course()$$
CALL ins_to_res_member_project()$$
CALL ins_rows_to_journal()$$
CALL ins_rows_to_academic_conf()$$
CALL ins_rows_to_publication()$$
CALL ins_to_res_member_pub()$$
CALL ins_pub_journal()$$
CALL ins_pub_ac_conf()$$