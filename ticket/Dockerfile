
# AS <NAME> to name this stage as maven
FROM maven:3.6.3 AS maven

WORKDIR /usr/src/app
COPY . /usr/src/app
# Compile and package the application to an executable JAR
RUN mvn clean install 

# For Java 11, 
FROM adoptopenjdk/openjdk11:alpine-jre

ARG JAR_FILE=Version2-0.0.1-SNAPSHOT.jar

WORKDIR /opt/app

# Copy the ticket-service.jar from the maven stage to the /opt/app directory of the current stage.
COPY --from=maven /usr/src/app/target/${JAR_FILE} /opt/app/

ENTRYPOINT ["java","-jar","Version2-0.0.1-SNAPSHOT.jar"]