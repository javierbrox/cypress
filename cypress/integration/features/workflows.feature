Feature: Workflows


  Scenario Outline: Search by WorkflowId with runId
    Given I navigate to "Bpm-workflows"
     When I write "<workflowID>" workflowId
     And I write "<RunId>" runId
     And I click in "search" button
     Then Workflow Id is shown with every data

   Examples:
       | workflowID                          | RunId                             |
       | MOBILE_ACTIVATION_NEW_722101007_391 | e6292b4d-0b5a-4708-9216-3698fa0ccc42 |
    

  Scenario: Search by status
     Given I navigate to "Bpm-workflows"
     When I click in "arrow status box" button
     Then all status are shown
     When I select "status"
     And I click in "search status" button
     Then Workflow Id in "status" status are shown
