export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias magnam, iure exercitationem magni recusandae reprehenderit. Consectetur laudantium, quibusdam aliquam nisi minima temporibus id recusandae perspiciatis impedit repellendus consequatur culpa quae.",
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias magnam, iure exercitationem magni recusandae reprehenderit. Consectetur laudantium, quibusdam aliquam nisi minima temporibus id recusandae perspiciatis impedit repellendus consequatur culpa quae.",
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias magnam, iure exercitationem magni recusandae reprehenderit. Consectetur laudantium, quibusdam aliquam nisi minima temporibus id recusandae perspiciatis impedit repellendus consequatur culpa quae.",
            picture: null
        },
    ]
})