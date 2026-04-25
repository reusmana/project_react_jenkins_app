pipeline {
    agent any
    environment {
        NODE_ENV = "production"
        AUTHOR = "Reusmana Sujani"
        // DESK = "Jenkins Pipeline"
    }
    options {
        disableConcurrentBuilds() // mencegah build concurrent // mencegah job berjalan bersamaan, jika ada job yang sedang berjalan maka job selanjutnya akan menunggu hingga job pertama selesai
        // timeout(time: 5, unit: 'SECONDS') // mencegah build berjalan terlalu lama, max 10 detik, jika lebih dari itu maka build akan dihentikan
        // retry(2)
        // timestamps()
    }
    triggers {
        cron('* * * * *') // menjalankan job setiap menit
        // cron('H/5 * * * *') // menjalankan job setiap 5 menit
        // pollSCM('H/5 * * * *') // memeriksa perubahan di SCM setiap 5 menit
        // githubPush() // memicu build saat ada push ke GitHub
    }
    parameters {
        string(name: 'PARAM1', defaultValue: 'Default Value', description: 'This is a string parameter')
        text(name: 'PARAM2', defaultValue: 'Default Text', description: 'This is a text parameter')
        choice(name: 'PARAM3', choices: ['Option 1', 'Option 2', 'Option 3'], description: 'This is a choice parameter')
        booleanParam(name: 'FLAG', defaultValue: true, description: 'This is a boolean parameter')
        password(name: 'PARAM4', defaultValue: '', description: 'This is a password parameter')
    }
    stages {
        stage("Initialization") {
            environment {
                INIT_VAR = "Initialization Stage"
                APP = credentials("reusmana")    // masukan id 
            }
            steps {
                echo "Initializing Jenkins Pipeline"
                echo "Testing Credentials"
                echo ("Username: ${APP_USR}")
                echo ("Password: ${APP_PSW}")
                sh('echo $APP_PSW > "rahasia.txt"')
            }
        }
        stage("Parameters") {
            steps {
                echo "Testing Jenkins Pipeline Parameters"
                echo ("PARAM1: ${params.PARAM1}")
                echo ("PARAM2: ${params.PARAM2}")
                echo ("PARAM3: ${params.PARAM3}")
                echo ("FLAG: ${params.FLAG}")
                echo ("PARAM4: ${params.PARAM4}")
            }
        }
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
                // sh("npm run build")
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
                echo ("NODE_ENV: ${NODE_ENV}")
                echo ("AUTHOR: ${AUTHOR}")
                echo ("DESK: ${DESK}")
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