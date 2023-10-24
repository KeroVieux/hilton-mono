Feature: Reservation workflow
  Scenario: Guests should be able to update reservations.
    Given I navigate to the record page
    Then The list has one record
    When I click the update button
    Then The update dialog should display
    When I update the remark with message "Vegetarian diet"
    Then The record will show a remark with "Vegetarian diet"


