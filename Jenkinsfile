@Library("share_library_jenkins_learn@main")_ // ini using vars, _ di gunakan agar global, share_library_jenkins_learn adalah nama library yang sudah di buat, @main adalah branch yang di gunakan

import reusmana.jenkins.Output

pipeline {
    agent any
    stages {
        stage("test_vars") {
            steps {
                script {
                    hello.world("jenkins pipeline") // ini di ambil dari library, file hello.groovy, method world, dengan parameter "jenkins pipeline"
                }
            }
        }
        stage("test_class_src") {
            steps {
                script {
                    Output.hello("jenkins pipeline class") // ini di ambil dari library, file hello.groovy, method world, dengan parameter "jenkins pipeline 2"
                }
            }
        }
    }
}