FROM openjdk:18-jdk-alpine
VOLUME /tmp
ADD target/OrderMicroservice-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]