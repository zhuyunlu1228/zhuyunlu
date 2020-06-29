
const MyCoursesList = () => import('@/pages/myCourses')
const Models = () => import('@/pages/models')
const ModelsUpload=()=>import('@/pages/models/uploadModels')
const ModelsMy=()=>import('@/pages/models/myModels')
const ModelsClassMy=()=>import('@/pages/models/myClass')
const AllCourses = () => import('@/pages/allCourses')
const CoursesResources=()=>import('@/pages/myCourses/courseResources')
const CoursesClassInfo=()=>import('@/pages/myCourses/classInfo')
const Course=()=>import('@/pages/myCourses/course')


//FIXME add more children
const dynamicRoutes = [
    {
        path: 'myCourses',
        name: 'my-courses',
        component: MyCoursesList,   
        redirect:{
            name:'courses-course-list'
        },
        meta: {
            name: '我的课程',
            icon:'course'
        },
        children: [
            {
                path:'courseList',
                name:'courses-course-list',
                component: MyCoursesList,
                meta:{
                    name: '课程列表',
                    icon: 'courseList',
                    children:[
                        {
                            path: 'course/:id',
                            name: 'singe-course',
                            component: Course
                        },
                    ]
                }
            },
            {
                path: 'myClass',
                name: 'courses-class-info',
                component: CoursesClassInfo,
                mata:{
                    name: '班级信息',
                    icon: 'classInfo',
                }
            },
            {
                path: 'resources',
                name:'courses-resources',
                component: CoursesResources,
                meta:{
                    name:'教学资源',
                    icon:'resource',
                }
            },
        ]

    },
    {
        path: 'allCourses',
        component: AllCourses,
        name: 'all-courses',
        meta: {
            name: '全部课程'
                },
    },
    {
        path: 'models',
        component: Models,
        name: 'models',
        meta: {
            name: '三维模型'
        },
        children:[
            {
                path: 'myModels',
                name: 'models-my-models',
                component: ModelsMy,
                meta: {
                    name: "我的模型",
                    icon: 'resource',
                },
            },
            {
                path: 'uploadModels',
                name: 'models-upload-models',
                component: ModelsUpload,
                meta: {
                    name: "我的模型",
                    icon: 'resource',
                },
            },
            {
                path: 'myClass',
                name: 'models-my-class',
                component: ModelsClassMy,
                meta: {
                    name: "我的班级",
                    icon: 'resource',
                },

            }
        ]
    }

]
export default dynamicRoutes;