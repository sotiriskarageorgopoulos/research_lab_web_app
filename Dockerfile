FROM openjdk:12-jdk-alpine
COPY research_lab_api-1.0-all.jar research_lab_api-1.0-all.jar
CMD ["java","-jar","research_lab_api-1.0-all.jar"]
