@Library("share_library_jenkins_learn@main")_

pipeline {
    agent any
    stages {
        stage("test") {
            steps {
                script {
                    hello.world("jenkins pipeline") // ini di ambil dari library, file hello.groovy, method world, dengan parameter "jenkins pipeline"
                }
            }
        }
    }
}