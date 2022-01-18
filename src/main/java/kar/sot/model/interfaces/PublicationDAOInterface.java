package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface PublicationDAOInterface<T> {
    public T getPublicationsInJournal();
    public T getPublicationsInAcademicConf();
    public T getPublicationsByResearcher(String academicId,String order);
    public T getPublicationsPerJournal(String academicId);
    public T getCommonPublications(String firstAcademicId, String secondAcademicId);
    public T getPublication(String pid);
    public T getPublications();
    public void postPublication(JsonObject obj);
    public void deletePublication(JsonObject obj);
}
