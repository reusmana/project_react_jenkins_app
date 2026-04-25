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
    }
}