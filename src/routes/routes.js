import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Course from '../components/course/course';
import Courses from '../components/courses/courses';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home';
import Publication from '../components/publication/publication';
import Publications from '../components/publications/publications';
import ResearchMembers from '../components/research_members/research_members';
import ResearchMember from '../components/research_member/research_member';
import ResearchProject from '../components/research_project/research_project';
import ResearchProjects from '../components/research_projects/research_projects';
import Announcements from '../components/announcements/annoncements';
import Announcement from '../components/announcement/announcement';
import InsertRows from '../components/insert_rows/insert_rows';
import UpdateRows from '../components/update_rows/update_rows';
import DeleteRows from '../components/delete_rows/delete_rows';
import Login from '../components/login/login';
import Admin from '../components/admin/admin';

const RouterSetup = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/course/:cid" element={<Course />}/>
                <Route exact path="/courses" element={<Courses />}/>
                <Route exact path="/publication/:pid" element={<Publication />}/>
                <Route exact path="/publications" element={<Publications />}/>
                <Route exact path="/research_members" element={<ResearchMembers />}/>
                <Route exact path="/research_member/:academicId" element={<ResearchMember />} />
                <Route exact path="/research_project/:rpId" element={<ResearchProject />} />
                <Route exact path="/research_projects" element={<ResearchProjects />}/>
                <Route exact path="/announcements" element={<Announcements />} />
                <Route exact path="/announcement/:id" element={<Announcement />} />
                <Route exact path="/insert_rows" element={<InsertRows />}/>
                <Route exact path="/update_rows" element={<UpdateRows />}/>
                <Route exact path="/delete_rows" element={<DeleteRows />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterSetup