var app = angular.module('examApp', [])
  
    app.controller('ExamController', ['students', function(students) {
            
        var self = this;

        self.courses = students.allCourses;
        self.students = students.students;

  }]);
  
  app.filter('calcAvrg', function() {
      
      return function(grades) {
          
          var avrg = 0;
          
          grades.forEach(function(g) {
              if (g.grade !== undefined)
                avrg += parseInt(g.grade);
          });
          
          return avrg / 2;
      }
  });
  
  app.factory('students', function() {
     
      var studentsInfo = {};
        studentsInfo.allCourses = [
          {courseId : 1000,courseName: "Basic Programming"},
          {courseId : 1001,courseName: "Advanced Programming"},
          {courseId : 1003,courseName: "DataBase Intro"}];

        studentsInfo.students = [];
        studentsInfo.students.push({studentId : 100, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
        studentsInfo.students.push({studentId : 101, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
        studentsInfo.students.push({studentId : 102, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
        studentsInfo.students.push({studentId : 103, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});
        
        return studentsInfo;
      
  });
  
  app.directive('studentGrades', function() {
      return {
        templateUrl: 'studentGrades.html'
      };
  });