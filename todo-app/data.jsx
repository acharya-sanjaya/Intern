const menuItems =
    [
        {
            title: "Home",
            url: "/",
        }, {
            title: "My tasks",
            chapters: [
                {
                    title: "Chapter 1",
                    tasks: [
                        { title: "Task 1", url: "C1T1", },
                        { title: "Task 2", url: "C1T2", },
                        { title: "Task 3", url: "C1T3", },
                    ]
                },
                {
                    title: "Chapter 2",
                    tasks: [
                        { title: "Task 1", url: "C2T1", },
                        { title: "Task 2", url: "C2T2", },
                        { title: "Task 3", url: "C2T3", },
                    ]
                },
            ]
        }
    ]

export default menuItems; w