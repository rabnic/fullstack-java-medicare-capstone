pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'medicare-backend'
        FRONTEND_IMAGE = 'medicare-frontend'
        DOCKER_CREDENTIALS_ID = 'dockerHub' 
    }

    stages {
        stage("Checkout") {
            steps {
                git url: 'https://github.com/rabnic/fullstack-java-medicare-capstone', branch: 'main'  
            }
        }

        stage("Build Backend") {
            steps {
                dir('backend/medicare') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage("Build Frontend") {
            steps {
                dir('frontend/medicare-app') {
                    sh 'npm install'
                    sh 'ng build --prod'
                }
            }
        }

        stage("Build Docker Images") {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./backend/medicare'
                sh 'docker build -t $FRONTEND_IMAGE ./frontend/medicare-app'
            }
        }

        stage("Push Docker Images") {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker tag $BACKEND_IMAGE $DOCKER_USER/$BACKEND_IMAGE
                        docker tag $FRONTEND_IMAGE $DOCKER_USER/$FRONTEND_IMAGE
                        docker push $DOCKER_USER/$BACKEND_IMAGE
                        docker push $DOCKER_USER/$FRONTEND_IMAGE
                    """
                }
            }
        }

        stage("Deploy with Docker Compose") {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
