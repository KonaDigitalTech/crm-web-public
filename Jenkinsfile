pipeline {
    agent {
    node {
         label 'digitaledify'
         }
     }  

    environment {
        deployBranch = "${env.BRANCH_NAME}"
        deployService = "your_deploying_dev_service"
    }  
    stages {
        stage('notification-slack') {
            steps {
                slackSend channel: 'deployments', 
                          color: '439FE0', 
                          message: "started ${JOB_NAME} ${BUILD_NUMBER} (<${BUILD_URL}|Open>)", 
                          teamDomain: 'kdigital-tech', 
                          tokenCredentialId: 'slack-id', 
                          username: 'de-crm'
            }
        }
        stage('Deploynibg to Vercel') {
            steps {
                script {

                    sh 'curl https://api.vercel.com/v1/integrations/deploy/prj_wdnR1n7tzefR9Hu6uepKDWka4vpn/uAsc0juUOy'

                }
            }
        }
        stage('Build Logs') {
            steps {
                emailext body: 'Build logs for this Job',
                        subject: 'jenkins-notification',
                        to: 'devops@digital-edify.com',
                        attachLog: true
            }
        }
    }
}
