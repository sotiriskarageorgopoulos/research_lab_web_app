export const choices = [
    {
        title: 'Update Course Title',
        endpoint: 'http://localhost:4568/api/getAllCourses',
        updEndpoint: 'http://localhost:4568/api/updCourseTitle',
        inputType: 'text',
        selectShow: ['title'],
        attr: "title",
        pk: 'cid'
    },
    {
        title: 'Update Announcement Title',
        endpoint: 'http://localhost:4568/api/getAllAnnouncements',
        updEndpoint: 'http://localhost:4568/api/updAnnouncementTitle',
        inputType: 'text',
        selectShow: ['title'],
        attr: "title",
        pk: 'aid'
    },
    {
        title: 'Update Announcement Content',
        endpoint: 'http://localhost:4568/api/getAllAnnouncements',
        updEndpoint: 'http://localhost:4568/api/updAnnouncementContent',
        inputType: 'text',
        inputShow: "content",
        selectShow: ['title'],
        attr: "content",
        pk: 'aid'
    },
    {
        title: 'Update Short CV',
        endpoint: 'http://localhost:4568/api/getAllResMembers',
        updEndpoint: 'http://localhost:4568/api/updShortCV',
        inputType: 'text',
        selectShow: ['name','surname'],
        attr: "shortCV",
        pk: 'academicId'
    },
    {
        title: 'Update Level',
        endpoint: 'http://localhost:4568/api/getAllResMembers',
        updEndpoint: 'http://localhost:4568/api/updLevel',
        inputType: 'text',
        selectShow: ['name','surname'],
        attr: "level",
        pk: 'academicId'
    },
    {
        title: 'Update Profile Image',
        endpoint: 'http://localhost:4568/api/getAllResMembers',
        updEndpoint: 'http://localhost:4568/api/updImage',
        inputType: 'button',
        selectShow: ['name','surname'],
        attr: "image",
        pk: 'academicId'
    },
    {
        title: 'Update Address',
        endpoint: 'http://localhost:4568/api/getAllResMembers',
        updEndpoint: 'http://localhost:4568/api/updAddress',
        inputType: 'text',
        selectShow: ['name','surname'],
        attr: "address",
        pk: 'academicId'
    },
    {
        title: 'Update Tel',
        endpoint: 'http://localhost:4568/api/getAllResMembers',
        updEndpoint: 'http://localhost:4568/api/updTel',
        inputType: 'text',
        selectShow: ['name','surname'],
        attr: "tel",
        pk: 'academicId'
    },
    {
        title: 'Update Web Page',
        endpoint: 'http://localhost:4568/api/getAllResMembers',
        updEndpoint: 'http://localhost:4568/api/updWebPage',
        inputType: 'text',
        selectShow: ['name','surname'],
        attr: "webPage",
        pk: 'academicId'
    },
    {
        title: 'Update Course Description',
        endpoint: 'http://localhost:4568/api/getAllCourses',
        updEndpoint: 'http://localhost:4568/api/updCourseDesc',
        inputType: 'text',
        selectShow: ['title'],
        attr: "description",
        pk: 'cid'
    },
    {
        title: 'Update Course ECTS',
        endpoint: 'http://localhost:4568/api/getAllCourses',
        updEndpoint: 'http://localhost:4568/api/updCourseECTS',
        inputType: 'text',
        selectShow: ['title'],
        attr: "ects",
        pk: 'cid'
    },
    {
        title: 'Update Project\'s Progress',
        endpoint: 'http://localhost:4568/api/getAllProjects',
        updEndpoint: 'http://localhost:4568/api/updProjectProgress',
        inputType: 'boolean',
        selectShow: ['title'],
        attr: "isActive",
        pk: 'rpid'
    },
    {
       title: 'Update Journal\'s Web Page',
       endpoint: 'http://localhost:4568/api/getAllJournals',
       updEndpoint: 'http://localhost:4568/api/updJournalWebPage',
       inputType: 'text',
       selectShow: ['title'],
       attr: "webPage",
       pk: 'jid'
    },
    {
        title: 'Update Lab\'s Title',
        endpoint: 'http://localhost:4568/api/getAllLabs',
        updEndpoint: 'http://localhost:4568/api/updLabTitle',
        inputType: 'text',
        selectShow: ['title'],
        attr: "title",
        pk: 'lid'
    },
    {
        title: 'Update Lab\'s Description',
        endpoint: 'http://localhost:4568/api/getAllLabs',
        updEndpoint: 'http://localhost:4568/api/updLabDesc',
        inputType: 'text',
        selectShow: ['title'],
        attr: "description",
        pk: 'lid'
    },
    {
        title: 'Update Lab\'s Web Page',
        endpoint: 'http://localhost:4568/api/getAllLabs',
        updEndpoint: 'http://localhost:4568/api/updLabPage',
        inputType: 'text',
        selectShow: ['title'],
        attr: "webPage",
        pk: 'lid'
    }
]
