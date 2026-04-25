pipeline {
    agent {
        node {
            label 'macos'
        }
    }
    parameters {
        booleanParam(name: 'DEPLOY_NOW', defaultValue: true, description: 'This is a boolean parameter')
    }
    stages {
        stage("Release") {
            when {
                expression { return params.DEPLOY_NOW }
            }
            steps {
                echo "Deploying the application..."
                // Tambahkan langkah-langkah untuk melakukan deployment di sini
            }
        }   
        stage("Prepare") {
            stages { // Nested stages, ketika sudah ada stages di dalam stage, tidak bisa di gabung dengan steps, harus di buat stage lagi
                stage("Build"){
                    steps {
                        echo "Testing Jenkins Pipeline Prepare Build"
                    }
                }
            }
        }
    }
}