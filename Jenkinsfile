pipeline {
    agent {
        node {
            label "main"
        }
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