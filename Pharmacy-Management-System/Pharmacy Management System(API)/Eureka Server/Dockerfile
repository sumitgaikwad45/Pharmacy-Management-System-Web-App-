FROM openjdk:18-jdk-alpine
VOLUME /tmp
ADD target/Eureka-Server-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]