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
            name: 'sizes',
            type: 'string',
            title: 'Customer Sizes',
            options: {
                list: [
                    { title: 'Extra Small', value: 'xs' },
                    { title: 'Small', value: 'sm' },
                    { title: 'Medium', value: 'md' },
                    { title: 'Large', value: 'lg' }
                ],
                layout: 'radio'
            }
        }
    ]
}