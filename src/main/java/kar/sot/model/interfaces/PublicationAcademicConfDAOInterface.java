package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface PublicationAcademicConfDAOInterface<T>{
    public T getPublicationAcademicConfs();
    public T postPublicationAcademicConf(JsonObject obj);
}
