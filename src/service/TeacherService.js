import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:8080/teacher";
const STUDENT_API_BASE_URL = "http://localhost:8080/student";
//
// const TEACHER_API_BASE_URL = "https://springarudent.herokuapp.com/teacher";
// const STUDENT_API_BASE_URL = "https://springarudent.herokuapp.com/student";


class TeacherService {


    createTeacher(teacher) {
        return axios.post(TEACHER_API_BASE_URL+"/newTeacher", teacher);
    }

    getTeacherById(teacherId){
        return axios.get(TEACHER_API_BASE_URL + '/getTeacherId/' + teacherId);
    }
//
    updateTeacher(teacher, teacherId){
        return axios.put(TEACHER_API_BASE_URL + '/updateTeacher/' + teacherId, teacher);
    }

    addPostByTeacher(post, teacherId){
        return axios.put(TEACHER_API_BASE_URL + '/addTeacherById/' + teacherId, post);
    }
    addStudentByTeacher(student, teacherId){
        return axios.put(STUDENT_API_BASE_URL + '/addStudentById/' + teacherId, student);
    }
//
//     deleteEmployee(employeeId){
//         return axios.delete(TEACHER_API_BASE_URL + '/' + employeeId);
//     }
// }
}
export default new TeacherService()

//"proxy": "http://localhost:8080",