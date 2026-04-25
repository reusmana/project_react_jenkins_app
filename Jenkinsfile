pipeline {
    agent {
        node {
            label "main"
        }
    }
    environment {
        NODE_ENV = "production"
        AUTHOR = "Reusmana Sujani"
    }
    stages {
        stage("Builds") {
            steps {
                echo "Testing Jenkins Pipeline Builds"
                sh("npm install")
                echo "Testing Jenkins Pipeline Builds ke 2"
            }
        }
        stage("Tests") {
            steps {
                echo "Testing Jenkins Pipeline Tests"
                sh("npm run build")
            }
        }
        stage("Script") {
            steps {
                script {
                    for (int i = 0; i < 5; i++) {
                        echo "Iteration: ${i}"
                    }
                }
            }
        }
        stage("Utils Steps"){
            steps {
                script {
                    def data = [
                        name: "Jenkins Pipeline Utils",
                        version: "1.0.0"

                    ]
                    
                    writeJSON file: 'data.json', json: data
                    echo "Data written to data.json"
                }
            }
        }

        stage("Custom Agent"){
            agent {
                node {
                    label "agent && macos"
                }
            }
            steps {
                echo "This stage runs on a custom agent"
                // Global variables
                echo ("start job : ${env.JOB_NAME}")
                echo ("build number : ${env.BUILD_NUMBER}")
                echo ("build name : ${env.BUILD_NAME}")
            }
        }
        stage("Environment Variables"){
            environment {
                DESK = "Reusmana Sujani"
            }
            steps {
                echo "Environment Variables"
                echo ("NODE_ENV: ${env.NODE_ENV}")
                echo ("AUTHOR: ${env.AUTHOR}")
                echo ("DESK: ${env.DESK}")
            }
        }
    }
    post {
        always {
            echo "This will always run"
        }
        success {
            echo "This will run only if successful"
        }
        failure {
            echo "This will run only if failed"
        }
        cleanup {
            echo "This will run after all stages, regardless of the outcome"
        }
    }
}