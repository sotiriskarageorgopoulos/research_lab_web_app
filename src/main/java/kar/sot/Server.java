package kar.sot;

import kar.sot.controllers.*;

import static spark.Spark.*;

public class Server {
    public static void main(String[] args) {
        port(4568);

        path("/api", () -> {
            get("/getAllLabs", (req, res) -> LabController.getAllLabs(req, res));
            get("/getAllAnnouncements", (req, res) -> AnnouncementController.getAllAnnouncements(req, res));
            get("/getAllCourses", (req, res) -> CourseController.getAllCourses(req, res));
            get("/getAllResMembers", (req, res) -> ResearchMemberController.getAllResMembers(req, res));
            get("/getAllProjects", (req, res) -> ResearchProjectController.getAllProjects(req, res));
            get("/getAllPublications", (req, res) -> PublicationController.getPublications(req, res));
            get("/getAllJournals", (req, res) -> JournalController.getJournals(req, res));
            get("/getAllAcademicConfs", (req, res) -> AcademicConferenceController.getAllAcademicConfs(req, res));
            get("/getAllResearchMemberProjects", (req, res) -> ResearchMemberProjectController.getAllResearchMemberProjects(req, res));
            get("/getResearchMemberPublications", (req, res) -> ResearchMemberPublicationController.getResearchMemberPublications(req, res));
            get("/getPublicationJournals", (req, res) -> PublicationJournalController.getPublicationJournal(req, res));
            get("/getPublicationAcademicConfs", (req, res) -> PublicationAcademicConfController.getPublicationAcademicConfs(req, res));
            post("/postAcademicConference", (req, res) -> AcademicConferenceController.postAcademicConf(req, res));
            post("/postAnnouncement", (req, res) -> AnnouncementController.postAnnouncement(req, res));
            post("/postCourse", (req, res) -> CourseController.postCourse(req, res));
            post("/postJournal", (req, res) -> JournalController.postJournal(req, res));
            post("/postLab", (req, res) -> LabController.postLab(req, res));
            post("/postPublicationAcademicConfs", (req, res) -> PublicationAcademicConfController.postPublicationAcademicConfs(req, res));
            post("/postPublication", (req, res) -> PublicationController.postPublication(req, res));
            post("/postPublicationJournal", (req, res) -> PublicationJournalController.postPublicationJournal(req, res));
            post("/postResMember", (req, res) -> ResearchMemberController.postResMember(req, res));
            post("/postResMemberProject", (req, res) -> ResearchMemberProjectController.postResearchMemberProject(req, res));
            post("/postResearchMemberPublication", (req, res) -> ResearchMemberPublicationController.postResearchMemberPublication(req, res));
            post("/postProject", (req, res) -> ResearchProjectController.postProject(req, res));
            delete("/delAcademicConf/:acid", (req, res) -> AcademicConferenceController.delAcademicConf(req, res));
            delete("/delAnnouncement/:aid", (req, res) -> AnnouncementController.delAnnouncement(req, res));
            delete("/delCourse/:cid", (req, res) -> CourseController.delCourse(req, res));
            delete("/delJournal/:jid", (req, res) -> JournalController.deleteJournal(req, res));
            delete("/delLab/:lid", (req, res) -> LabController.deleteLab(req, res));
            delete("/deletePublication", (req, res) -> PublicationController.delPublication(req, res));
            delete("/delResMember/:academicId", (req, res) -> ResearchMemberController.delResMember(req, res));
            delete("/delProject/:rpid", (req, res) -> ResearchProjectController.deleteProject(req, res));
            put("/updCourseTitle", (req, res) -> CourseController.updateCourse(req, res));
            put("/updAnnouncementTitle", (req, res) -> AnnouncementController.updAnnouncementTitle(req, res));
            put("/updAnnouncementContent", (req, res) -> AnnouncementController.updAnnouncementContent(req, res));
            put("/updShortCV", (req, res) -> ResearchMemberController.updShortCV(req, res));
            put("/updLevel", (req, res) -> ResearchMemberController.updLevel(req, res));
            put("/updImage", (req, res) -> ResearchMemberController.updImage(req, res));
            put("/updAddress", (req, res) -> ResearchMemberController.updAddress(req, res));
            put("/updTel", (req, res) -> ResearchMemberController.updTel(req, res));
            put("/updWebPage", (req, res) -> ResearchMemberController.updWebPage(req, res));
            put("/updCourseDesc", (req, res) -> CourseController.updateCourseDesc(req, res));
            put("/updCourseECTS", (req, res) -> CourseController.updateCourseECTS(req, res));
            put("/updProjectProgress", (req, res) -> ResearchProjectController.updProjectProgress(req, res));
            put("/updJournalWebPage", (req, res) -> JournalController.updateJournalWebPage(req, res));
            put("/updLabTitle", (req, res) -> LabController.updateLabTitle(req, res));
            put("/updLabDesc", (req, res) -> LabController.updateLabDesc(req, res));
            put("/updLabPage", (req, res) -> LabController.updateLabWebPage(req, res));
            get("/getPublicationsInJournal", (req, res) -> PublicationController.getPublicationsInJournal(req, res));
            get("/getPublicationsInAcademicConf", (req, res) -> PublicationController.getPublicationsInAcademicConf(req, res));
            get("/getActiveProjects", (req, res) -> ResearchProjectController.getActiveProjects(req, res));
            get("/orderProjectsByIncomeDescOrder", (req, res) -> ResearchProjectController.orderProjectsByIncomeDescOrder(req, res));
            get("/orderProjectsByIncomeAscOrder", (req, res) -> ResearchProjectController.orderProjectsByIncomeAscOrder(req, res));
            get("/getProjectByResearcher/:academicId", (req, res) -> ResearchProjectController.getProjectByResearcher(req, res));
            get("/getProjectByResearcherPerDate/:academicId", (req, res) -> ResearchProjectController.getProjectByResearcherPerDate(req, res));
            get("/getFiveRecentAnnouncements", (req, res) -> AnnouncementController.getFiveRecentAnnouncements(req, res));
            get("/getPublicationsByResearcherInDescOrder/:academicId", (req, res) -> PublicationController.getPublicationsByResearcherInDescOrder(req, res));
            get("/getPublicationsByResearcherInAscOrder/:academicId", (req, res) -> PublicationController.getPublicationsByResearcherInAscOrder(req, res));
            get("/getPublicationsPerJournal/:academicId", (req, res) -> PublicationController.getPublicationsPerJournal(req, res));
            get("/getCommonPublications/:firstAcademicId/:secondAcademicId", (req, res) -> PublicationController.getCommonPublications(req, res));
            get("/getMembersWithAtLeastOneCourse", (req, res) -> ResearchMemberController.getMembersWithAtLeastOneCourse(req, res));
            get("/getMembersWithAtLeastOnePublication", (req, res) -> ResearchMemberController.getMembersWithAtLeastOnePublication(req, res));
            get("/getMembersWithoutProjects", (req, res) -> ResearchMemberController.getMembersWithoutProjects(req, res));
            get("/getMembersWithoutPublications", (req, res) -> ResearchMemberController.getMembersWithoutPublications(req, res));
            get("/getMemberWithMaxPublications", (req, res) -> ResearchMemberController.getMemberWithMaxPublications(req, res));
            get("/getMemberWithMinPublications", (req, res) -> ResearchMemberController.getMemberWithMinPublications(req, res));
            get("/getMemberWithMinProjects", (req, res) -> ResearchMemberController.getMemberWithMinProjects(req, res));
            get("/getExternalMemberWithMaxProjects", (req, res) -> ResearchMemberController.getExternalMemberWithMaxProjects(req, res));
            get("/getResearcherByCourse/:cid", (req, res) -> ResearchMemberController.getResearcherByCourse(req, res));
            get("/getPublicationsPerYear", (req, res) -> StatisticsController.getPublicationsPerYear(req, res));
            get("/getTotalPublications", (req, res) -> StatisticsController.getTotalPublications(req, res));
            get("/getTotalIncome", (req, res) -> StatisticsController.getTotalIncome(req, res));
            get("/getIncomePerYear", (req, res) -> StatisticsController.getIncomePerYear(req, res));
            get("/getYearWithMinIncome", (req, res) -> StatisticsController.getYearWithMinIncome(req, res));
            get("/getYearWithMaxIncome", (req, res) -> StatisticsController.getYearWithMaxIncome(req, res));
            get("/getTotalMembers", (req, res) -> StatisticsController.getTotalMembers(req, res));
            get("/getTotalMembersPerLevel", (req, res) -> StatisticsController.getTotalMembersPerLevel(req, res));
            get("/getUniversityBenefits", (req, res) -> StatisticsController.getUniversityBenefits(req, res));
            get("/getUniversityBenefitsPerYear", (req, res) -> StatisticsController.getUniversityBenefitsPerYear(req, res));
            get("/getTotalExternalMembers", (req, res) -> StatisticsController.getTotalExternalMembers(req, res));
            get("/getConferencesForPublication/:pid", (req, res) -> AcademicConferenceController.getConferencesForPublication(req, res));
            get("/getJournalsForPublication/:pid", (req, res) -> JournalController.getJournalsForPublication(req, res));
            get("/getLabOfMember/:academicId", (req, res) -> LabController.getLabOfMember(req, res));
            get("/getMembersOfProject/:rpid", (req, res) -> ResearchMemberController.getMembersOfProject(req, res));
            get("/getMemberBySurname/:surname", (req, res) -> ResearchMemberController.getMemberBySurname(req, res));
            get("/getMember/:academicId", (req, res) -> ResearchMemberController.getMember(req, res));
            get("/getCourseByLevel/:level", (req, res) -> CourseController.getCourseByLevel(req, res));
            get("/getCourse/:cid", (req, res) -> CourseController.getCourse(req, res));
            get("/getLab/:lid", (req, res) -> LabController.getLab(req, res));
            get("/getPublication/:pid", (req, res) -> PublicationController.getPublication(req, res));
            get("/getAnnouncement/:aid", (req, res) -> AnnouncementController.getAnnouncement(req, res));
            get("/getMembersByLevel/:level", (req,res) -> ResearchMemberController.getMembersByLevel(req,res));
        });

        options("/*",
                (request, response) -> {
                    String accessControlRequestHeaders = request
                            .headers("Access-Control-Request-Headers");
                    if (accessControlRequestHeaders != null) {
                        response.header("Access-Control-Allow-Headers",
                                accessControlRequestHeaders);
                    }

                    String accessControlRequestMethod = request
                            .headers("Access-Control-Request-Method");
                    if (accessControlRequestMethod != null) {
                        response.header("Access-Control-Allow-Methods",
                                accessControlRequestMethod);
                    }

                    return "OK";
                });

        before((req, res) -> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, PUT, OPTIONS");
            res.type("application/json");
        });
    }
}
