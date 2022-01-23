export const announcementColumns = [
    {
        id:'aid',
        label:'aid',
        minWidth: 170
    },
    {
        id:'lid',
        label:'lid',
        minWidth: 170,
    },
    {
        id:'title',
        label:'title',
        minWidth: 170
    },
    {
        id:'content',
        label: 'content',
        minWidth: 200,
    },
    {
        id:'date',
        label: 'date',
        minWidth: 170
    }
]

export const labColumns = [{
    id: 'lid',
    label: 'lid',
    minWidth: 170
},
{
    id:'title',
    label: 'title',
    minWidth: 170
},
{
    id:'description',
    label:'l_description',
    minWidth: 170
},
{
    id:'image',
    label: 'image',
    minWidth: 170
},
{
    id: 'university',
    label: 'university',
    minWidth: 170
},
{
    id: 'webPage',
    label: 'web_page',
    minWidth: 170
}]

export const researchProjectColumns = [
    {
        id: 'rpid',
        label: 'rpid',
        minWidth: 170
    },
    {
        id: 'title',
        label: 'title',
        minWidth: 170
    },
    {
        id: 'description',
        label: 'rp_description',
        minWidth: 200
    },
    {
        id: 'assignmentDate',
        label: 'assignment_date',
        minWidth: 170
    },
    {
        id: 'isActive',
        label: 'is_active',
        minWidth: 170,
        format: value => value ? "true" : "false"
    },
    {
        id: 'income',
        label:'income',
        minWidth: 170,
        format: (value) => value.toLocaleString('de-DE')
    }
]

export const researchMemberProjectColumns = [
    {
        id:'academicId',
        label:'academic_id',
        minWidth: 170
    },
    {
        id: 'rpid',
        label:'rpid',
        minWidth: 170
    }
]

export const courseColumns = [
    {
        id: 'cid',
        label: 'cid',
        minWidth: 170
    },
    {
        id: 'academicId',
        label: 'academic_id',
        minWidth: 170
    },
    {
        id: 'title',
        label: 'title',
        minWidth: 170
    },
    {
        id: 'description',
        label: 'c_description',
        minWidth: 170
    },
    {
        id: 'ects',
        label: 'ects',
        minWidth: 170
    },
    {
        id: 'studyLevel',
        label: 'study_level',
        minWidth: 170
    }
]

export const researchMemberColumns = [
    {
        id:'academicId',
        label: 'academic_id',
        minWidth: 170
    },
    {
        id:'lid',
        label: 'lid',
        minWidth: 170
    },
    {
        id:'name',
        label: 'r_name',
        minWidth: 170
    },
    {
        id:'surname',
        label: 'r_surname',
        minWidth: 170
    },
    {
        id:'email',
        label: 'email',
        minWidth: 170
    },
    {
        id:'webPage',
        label: 'web_page',
        minWidth: 170
    },
    {
        id:'tel',
        label: 'tel',
        minWidth: 170
    },
    {
        id:'shortCV',
        label: 'short_cv',
        minWidth: 170
    },
    {
        id:'level',
        label: 'study_level',
        minWidth: 170
    },
    {
        id:'address',
        label:'address',
        minWidth: 170
    },
    {
        id:'isExternalMember',
        label: 'is_external_member',
        minWidth: 170,
        format: value => value ? "true" : "false"
    },
    {
        id:'image',
        label: 'image',
        minWidth: 170
    }
]

export const researchMemberPublicationColumns = [
    {
        id: 'pid',
        label: 'pid',
        minWidth: 170
    },
    {
        id: 'academicId',
        label: 'academic_id',
        minWidth: 170
    }
]

export const publicationColumns = [
    {
        id: 'pid',
        label: 'pid',
        minWidth: 170
    },
    {
        id: 'title',
        label: 'title',
        minWidth: 170
    },
    {
        id: 'content',
        label: 'content',
        minWidth: 170,
    },
    {
        id: 'date',
        label: 'date',
        minWidth: 170
    }
]

export const publicationJournalColumns = [
    {
        id: 'jid',
        label: 'jid',
        minWidth: 170
    },
    {
        id: 'pid',
        label: 'pid',
        minWidth: 170
    }
]

export const journalColumns = [
    {
        id: 'jid',
        label: 'jid',
        minWidth: 170
    },
    {
        id: 'title',
        label: 'title',
        minWidth: 170
    },
    {
        id: 'description',
        label: 'j_description',
        minWidth: 170
    },
    {
        id: 'webPage',
        label: 'web_page',
        minWidth: 170
    },
    {
        id: 'scientificSubject',
        label: 'scientific_subject',
        minWidth: 170
    }
]

export const publicationAcedemicConferenceColumns = [
    {
        id: 'pid',
        label: 'pid',
        minWidth: 170
    },
    {
        id: 'acid',
        label: 'acid',
        minWidth: 170
    }
]

export const academicConferenceColumns = [
    {
        id: 'acid',
        label: 'acid',
        minWidth: 170
    },
    {
        id: 'title',
        label: 'title',
        minWidth: 170
    },
    {
        id: 'description',
        label: 'ac_description',
        minWidth: 170
    },
    {
        id: 'date',
        label: 'date',
        minWidth: 170
    },
    {
        id: 'city',
        label: 'city',
        minWidth: 170
    },
    {
        id: 'country',
        label: 'country',
        minWidth: 170
    },
    {
        id: 'scientificSubject',
        label: 'scientific_subject',
        minWidth: 170
    }
]