@Library("share_library_jenkins_learn@main")_ // ini using vars, _ di gunakan agar global, share_library_jenkins_learn adalah nama library yang sudah di buat, @main adalah branch yang di gunakan

import reusmana.jenkins.Output;

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
                    Output.hello(this, "jenkins pipeline class") // ini di ambil dari library, file hello.groovy, method world, dengan parameter "jenkins pipeline 2"
                }
            }
        }
        stage("running_npm_command_via_groovy"){
            steps {
                script {
                    // def command = "npm --version"
                    // def result = sh(script: command, returnStdout: true).trim()
                    echo(noderun("npm --version")) // ini di ambil dari library, file noderun.groovy, method noderun, dengan parameter "npm --version"
                    echo(noderun("npm install")) // ini di ambil dari library, file noderun.groovy, method noderun, dengan parameter "npm install"
                    echo(noderun("npm run build")) // ini di ambil dari library, file noderun.groovy, method noderun, dengan parameter "npm run build"
                }
            }
        }
        stage("list"){
            steps{
                script {
                    hello.arrlist(["jenkins", "pipeline", "library"]) // ini di ambil dari library, file hello.groovy, method arrlist, dengan parameter list ["jenkins", "pipeline", "library"]
                }
            }
        }
        stage("map_key_value"){
            steps{
                script {
                    hello.person(["name": "reusmana", "age": "27"]) // ini di ambil dari library, file hello.groovy, method map, dengan parameter map ["key1": "value1", "key2": "value2"]
                }
            }
        }
        stage("test_resource"){
            steps{
                script {
                    def fileConfig = libraryResource "json/config.json" // ini di ambil dari library, file config.json, dengan method libraryResource, dengan parameter "config.json"
                    echo(fileConfig) // menampilkan isi file config.json
                }
            }
        }
    }
}