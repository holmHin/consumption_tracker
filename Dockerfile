FROM openjdk:17.0.2
COPY target/consumptionTracker_dockerBuild.jar /opt
RUN java -jar /opt/consumptionTracker_dockerBuild.jar