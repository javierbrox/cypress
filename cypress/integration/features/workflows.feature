Feature: Workflows


  Scenario: Search by WorkflowId with runId
    Given I navigate to "Bpm-workflows"
     When I write "workflowID" workflowId
     And I write "RunId" runId
     And I click in "search" button
     Then Workflow Id is shown with every data


  Scenario: Search by status
     Given I navigate to "Bpm-workflows"
     When I click in "arrow status box" button
     Then all status are shown
     When I select "status"
     And I click in "search status" button
     Then Workflow Id in "status" status are shown
