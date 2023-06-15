import {Auth} from 'aws-amplify'

Cypress.Commands.add('signIn', (user = 'baseUser') => {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    const userPoolId = Cypress.env('POOL_ID')
    const clientId = Cypress.env('CLIENT_ID')
    const awsconfig = {
        aws_user_pools_id: userPoolId,
        aws_user_pools_web_client_id: clientId,
    }
    Auth.configure(awsconfig)

    cy.then(() => Auth.signIn(username, password))
        .then(cognitoUser => {
            console.log(cognitoUser)
        })
})
