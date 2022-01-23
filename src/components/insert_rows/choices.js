export const choices = [{
        title: 'Insert Research Project',
        endpoint: 'http://localhost:4568/api/postProject',
        inputs: [{
            name: 'rpid',
            type: 'text',
            show: 'rpid'
        }, {
            name: 'title',
            type: 'text',
            show: 'title'
        }, {
            name: 'description',
            type: 'text',
            show: 'description'
        }, {
            name: 'assignmentDate',
            type: 'date',
            show: 'assignment date'
        }, {
            name: 'isActive',
            type: 'boolean',
            show: 'is active'
        }, {
            name: 'income',
            type: 'number',
            show: 'income'
        }]
    }, {
        title: 'Insert Announcement',
        endpoint: 'http://localhost:4568/api/postAnnouncement',
        inputs: [
        {
            name: 'aid',
            type: 'text',
            show: 'aid'
        },
        {
            name: 'lid',
            type: 'text',
            show: 'lid',
            default: "L1"
        }, {
            name: 'title',
            type: 'text',
            show: 'title'
        }, {
            name: 'content',
            type: 'multiline_text',
            show: 'content'
        },
        {
            name: 'date',
            type: 'date',
            show: 'date',
        }]
    }, {
        title: 'Insert Course',
        endpoint: 'http://localhost:4568/api/postCourse',
        inputs: [{
            name: 'cid',
            show: 'cid',
            type: 'text'
        }, {
            name: 'academicId',
            show: 'academic id',
            type: 'text',
            data: [],
            endpoint: 'http://localhost:4568/api/getAllResMembers'
        }, {
            name: 'title',
            show: 'title',
            type: 'text'
        }, {
            name: 'description',
            type: 'text',
            show: 'description'
        }, {
            name: 'studyLevel',
            type: 'text',
            show: 'study level'
        }, {
            name: 'ects',
            type: 'number',
            show: 'ects'
        }]
    }, {
        title: 'Insert Research Member',
        endpoint: 'http://localhost:4568/api/postResMember',
        inputs: [{
            name: 'academicId',
            show: 'academic id',
            type: 'text'
        }, {
            name: 'lid',
            show: 'lid',
            type: 'text',
            data: [],
            endpoint: 'http://localhost:4568/api/getAllLabs'
        }, {
            name: 'name',
            show: 'surname',
            type: 'text'
        }, {
            name: 'surname',
            show: 'surname',
            type: 'text'
        }, {
            name: 'email',
            show: 'email',
            type: 'text'
        }, {
            name: 'webPage',
            show: 'webPage',
            type: 'text'
        }, {
            name: 'tel',
            show: 'tel',
            type: 'text'
        }, {
            name: 'shortCV',
            show: 'short cv',
            type: 'multiline_text'
        }, {
            name: 'level',
            show: 'level',
            type: 'select',
            data: [
                "Professor",
                "Associate Professor",
                "Assistant Professor",
                "Postdoctoral Researcher",
                "PHD Candidate",
                "Postgraduate Student",
                "Undergraduate Student"
            ]
        }, {
            name: 'address',
            show: 'address',
            type: 'text'
        }, {
            name: 'isExternalMember',
            show: 'isExternalMember',
            type: 'boolean'
        }, {
            name: 'image',
            show: 'image',
            type: 'button'
        }]
    }, {
        title: 'Insert Publication',
        endpoint: 'http://localhost:4568/api/postPublication',
        inputs: [{
                name: 'pid',
                show: 'pid',
                type: 'text'
            },
            {
                name: 'title',
                show: 'title',
                type: 'text'
            }, {
                name: 'date',
                show: 'date',
                type: 'date'
            }, {
                name: 'city',
                show: 'city',
                type: 'text'
            }, {
                name: 'content',
                show: 'content',
                type: 'multiline_text'
            }
        ]
    }, {
        title: 'Insert Academic Conference',
        endpoint: 'http://localhost:4568/api/postAcademicConference',
        inputs: [{
                name: 'acid',
                show: 'acid',
                type: 'text'
            },
            {
                name: 'title',
                show: 'title',
                type: 'text'
            }, {
                name: 'description',
                show: 'description',
                type: 'multiline_text'
            }, {
                name: 'date',
                show: 'date',
                type: 'date'
            }, {
                name: 'city',
                show: 'city',
                type: 'text'
            }, {
                name: 'country',
                show: 'country',
                type: 'text'
            }, {
                name: 'scientificSubject',
                show: 'scientific subject',
                type: 'text'
            }
        ]
    }, {
        title: 'Insert Journal',
        endpoint: 'http://localhost:4568/api/postJournal',
        inputs: [{
                name: "jid",
                show: "jid",
                type: "text"
            },
            {
                name: 'title',
                show: 'title',
                type: 'text'
            }, {
                name: 'description',
                show: 'description',
                type: 'multiline_text'
            }, {
                name: 'webPage',
                show: 'web page',
                type: 'text'
            }, {
                name: 'scientificSubject',
                show: 'scientific subject',
                type: 'text'
            }
        ]
    }, {
        title: 'Insert Publication_Academic_Conference',
        endpoint: 'http://localhost:4568/api/postPublicationAcademicConfs',
        inputs: [{
            name: 'pid',
            show: 'publication title',
            type: 'select',
            selectProp: 'title',
            data: [],
            endpoint: 'http://localhost:4568/api/getAllPublications'
        }, {
            name: 'acid',
            show: 'conference title',
            type: 'select',
            selectProp: 'title',
            data: [],
            endpoint: 'http://localhost:4568/api/getAllAcademicConfs'
        }]
    }, {
        title: 'Insert Publication_Journal',
        endpoint: 'http://localhost:4568/api/postPublicationJournal',
        inputs: [{
            name: 'jid',
            show: 'journal title',
            type: 'select',
            selectProp: 'title',
            data: [],
            endpoint: 'http://localhost:4568/api/getAllJournals'
        }, {
            name: 'pid',
            show: 'publication title',
            type: 'select',
            selectProp: 'title',
            data: [],
            endpoint: 'http://localhost:4568/api/getAllPublications'
        }]
    }, {
        title: 'Insert Research_Member_Publication',
        endpoint: 'http://localhost:4568/api/postResearchMemberPublication',
        inputs: [{
                name: 'academicId',
                show: 'academic id',
                type: 'select',
                data: [],
                endpoint: 'http://localhost:4568/api/getAllResMembers'
            },
            {
                name: 'pid',
                show: 'publication title',
                type: 'select',
                selectProp: 'title',
                data: [],
                endpoint: 'http://localhost:4568/api/getAllPublications'
            }
        ]
    },
    {
        title: 'Insert Research_Member_Project',
        endpoint: 'http://localhost:4568/api/postResMemberProject',
        inputs: [{
                name: 'academicId',
                show: 'academic id',
                type: 'select',
                data: [],
                endpoint: 'http://localhost:4568/api/getAllResMembers'
            },
            {
                name: 'rpid',
                show: 'project_title',
                type: 'select',
                selectProp: 'title',
                data: [],
                endpoint: 'http://localhost:4568/api/getAllProjects'
            }
        ]
    },
    {
        title: 'Insert Lab',
        endpoint: 'http://localhost:4568/api/postLab',
        inputs: [{
                name: "lid",
                show: "lid",
                type: "text"
            },
            {
                name: "title",
                show: "title",
                type: "text"
            },
            {
                name: "university",
                show: "university",
                type: "text"
            },
            {
                name: "description",
                show: "description",
                type: "text"
            },
            {
                name: "webPage",
                show: "web page",
                type: "text"
            },
            {
                name: 'image',
                show: 'image',
                type: 'button'
            }
        ]
    }
]