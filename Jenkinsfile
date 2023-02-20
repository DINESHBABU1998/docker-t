pipeline {
    agent any

    environment{
        entityGuid = 'MzY3OTk4NXxBUE18QVBQTElDQVRJT058MTMwMjU5NzI5NQ'
    }
    stages {
//         stage('Check env') {
//             steps {
//                 sh 'printenv'
//             }
//         }
        stage('post to NR'){
            steps{
                script{
                    step([$class: 'NewRelicDeploymentNotifier',
                    notifications: [[
                        apiKey: '60c4e602-b416-48c5-9df2-fba2552bf770',
                        applicationId: '1302597295',
                        changelog: '',
                        commit: '',
                        deeplink: '',
                        deploymentId: '',
                        deploymentType: 'ROLLING',
                        description: 'Created a New Deployment marker',
                        entityGuid: "${entityGuid}",
                        european: false,
                        groupId: '78945',
                        revision: '1',
                        timestamp: '',
                        user: 'dineshbabu',
                        version: '1'
                        ]]
                    ])
                }
            }
        }
    }
}
