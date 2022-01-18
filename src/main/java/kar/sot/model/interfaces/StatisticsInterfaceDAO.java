package kar.sot.model.interfaces;

public interface StatisticsInterfaceDAO<T> {
    public T getPublicationsPerYear();
    public T getTotalPublications();
    public T getTotalIncome();
    public T getIncomePerYear();
    public T getYearWithMinIncome();
    public T getYearWithMaxIncome();
    public T getTotalMembers();
    public T getTotalMembersPerLevel();
    public T getUniversityBenefits();
    public T getUniversityBenefitsPerYear();
    public T getTotalExternalMembers();
}
