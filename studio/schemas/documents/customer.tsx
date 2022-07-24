export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Full Name',
            readOnly: true
        },
        {
            name: 'email',
            type: 'email',
            title: 'Email Address',
            readOnly: true
        },
        {
            title: 'Identifying as',
            name: 'gender',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' },
                    { title: 'Non-Binary', value: 'nonbinary' },
                    { title: 'Genderqueer', value: 'genderqueer' },
                    { title: 'Gender Fluid', value: 'genderfluid' },
                    { title: 'Other', value: 'other' },
                    { title: 'Prefer Not To Answer', value: 'no_answer' }
                ]
            }
        },
        {
            name: 'location',
            type: 'string',
            title: 'City',
        },
        {
            title: 'Designers',
            name: 'designers',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            title: 'Pieces',
            name: 'pieces',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            title: 'Publications',
            name: 'publications',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}