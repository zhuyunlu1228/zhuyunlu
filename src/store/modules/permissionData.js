//warning: this part is a test for dev mod
//need to communicate with backend
//need delete 
//FIXME




export  const getData=()=>{
    let permissionList=[
        'models', 'my-courses', 'courses-resources', 'courses-class-info',
        'allCourses', 'myModels', 'course', 'resources', 'courses-course-list','profile'
    ]
    return permissionList;
    
}

export const getPermission=(role)=>{
    switch (role){
        case 'student':{
            return [
                'models', 'all-courses', 'courses-resources', 'courses-class-info',
                 'myModels', 'course', 'resources', 'courses-course-list'
            ]
        }
        case 'teacher':{
            return [
                'models', 'all-courses', 'my-courses', 'courses-resources', 'courses-class-info',
                'allCourses', 'myModels', 'course', 'resources', 'courses-course-list'
            ]
        }
        case 'admin':{
            return [
                'models', 'all-courses', 'my-courses', 'courses-resources', 'courses-class-info',
                'allCourses', 'myModels', 'course', 'resources', 'courses-course-list'
            ]
        }
    }
}