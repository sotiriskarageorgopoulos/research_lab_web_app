package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface CourseDAOInterface<T> {
    public T getAllCourses();
    public T getCourseByLevel(String level);
    public T getCourse(String cid);
    public void insertCourse(JsonObject obj);
    public void deleteCourse(String cid);
    public void updateCourseTitle(JsonObject obj);
    public void updateCourseDesc(JsonObject obj);
    public void updateCourseECTS(JsonObject obj);
}
