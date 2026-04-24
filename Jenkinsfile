pipeline {
    agent {
        node {
            label "agent && macos"
        }
    }
    stages {
        stage("Builds") {
            steps {
                echo "Testing Jenkins Pipeline Builds"
            }
        }
        stage("Tests") {
            steps {
                echo "Testing Jenkins Pipeline Tests"
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