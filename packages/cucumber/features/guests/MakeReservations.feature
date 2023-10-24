Feature: Reservation workflow
  Scenario: Guests should be able to make reservations.
    Given I am on the home page
    Then the page title should be "Hilton Reservation App"
    When I submit a reservation with a name "Rio" and a phone number "1234567"
    Then The page should navigate to the record one
    Then The list has only one record
    Given I back to the reservation page
    When I submit a reservation with a name "Ace" and a phone number "1234567"
    Then The page should navigate to the record one
    Then The list has only one record


