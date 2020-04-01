pipeline {
    agent {
        docker {
            image 'node:12-alpine' 
            args '-p 3030:3000' 
        }
    }
		environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn install' 
            }
        }
				stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
				stage('Deliver') {
					steps {
						sh './jenkins/scripts/deliver.sh'
					}
				}
    }
}
