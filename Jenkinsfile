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
            // tidak bisa menambah agent disini, harus di setiap stage
            failFast true // Jika ada error di stage ini, tidak langsung gagal, tapi lanjut ke stage berikutnya
            parallel { // Nested stages, ketika sudah ada stages di dalam stage, tidak bisa di gabung dengan steps, harus di buat stage lagi
                stage("Build"){
                    agent { // bisa disini
                        node {
                            label "agent && macos"
                        }
                    }
                    steps {
                        echo "Testing Jenkins Pipeline Prepare Build"
                        sleep(5)
                    }
                }
                stage("Test"){
                    agent { // bisa disini
                        node {
                            label "agent && macos"
                        }
                    }
                    steps {
                        echo "Testing Jenkins Pipeline Prepare Test"
                        sleep(5)
                    }
                }
            }
        }
        stage("Matrix"){
            stages {
                stage("Build & Test"){
                    matrix {
                        axes {
                            axis {
                                name 'NODE_VER'
                                values '18', '20'
                            }
                            axis {
                                name 'ENV_TYPE'
                                values 'staging', 'production'
                            }
                        }
                        // exclude {
                        //     axis {
                        //         name 'NODE_VER'
                        //         value '18'
                        //     }
                        //     axis {
                        //         name 'ENV_TYPE'
                        //         value 'production'
                        //     }
                        // }
                        steps {
                            echo "Testing Jenkins Pipeline Matrix Build & Test"
                            echo ("NODE_VER: ${NODE_VER}")
                            echo ("ENV_TYPE: ${ENV_TYPE}")
                        }
                    }
                }
            }
        }
        // stage("Prepare") {
        //     stages { // Nested stages, ketika sudah ada stages di dalam stage, tidak bisa di gabung dengan steps, harus di buat stage lagi
        //         stage("Build"){
        //             steps {
        //                 echo "Testing Jenkins Pipeline Prepare Build"
        //             }
        //         }
        //     }
        // }
    }
}