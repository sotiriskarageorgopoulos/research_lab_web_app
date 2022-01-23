package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface ResearchProjectDAOInterface<T> {
    public T getActiveProjects();
    public T getProjectsOrderByIncome(String order);
    public T getProjectByResearcher(String academicId);
    public T getProjectByResearcherPerDate(String academicId);
    public T getAllProjects();
    public T getProjectWithMaxIncome();
    public T getProjectWithMinIncome();
    public T getProject(String rpid);
    public void deleteProject(String rpid);
    public void postProject(JsonObject obj);
    public void updateProjectProgress(JsonObject obj);
}