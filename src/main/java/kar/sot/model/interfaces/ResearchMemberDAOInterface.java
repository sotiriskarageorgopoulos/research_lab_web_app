package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface ResearchMemberDAOInterface<T> {
    public T getAllMembers();
    public T getMembersWithAtLeastOneCourse();
    public T getMembersWithAtLeastOnePublication();
    public T getMembersWithoutProjects();
    public T getMembersWithoutPublications();
    public T getMemberWithMaxPublications();
    public T getMemberWithMinPublications();
    public T getMemberWithMinProjects();
    public T getExternalMemberWithMaxProjects();
    public T getResearcherByCourse(String courseId);
    public T getMembersOfProject(String rpid);
    public T getMemberBySurname(String surname);//23
    public T getMember(String academicId); //40
    public void postMember(JsonObject obj);
    public void deleteMember(JsonObject obj);
    public void updateShortCV(JsonObject obj);
    public void updateLevel(JsonObject obj);
    public void updateImage(JsonObject obj);
    public void updateAddress(JsonObject obj);
    public void updateTel(JsonObject obj);
    public void updateWebPage(JsonObject obj);
}
