import re

def test_validation():
    # 1. Name
    def test_name(val):
        cleaned = re.sub(r'[^a-zA-Z\s]', '', val).strip()
        return len(cleaned) >= 2 and not any(c.isdigit() for c in cleaned)

    assert not test_name(""), "Empty name should be invalid"
    assert not test_name("A"), "Single letter name should be invalid"
    assert test_name("Rajesh"), "Rajesh should be valid"
    assert test_name("Dr. Meera"), "Dr Meera should be valid after cleaning"

    # 2. Phone
    def test_phone(val):
        digits = re.sub(r'\D', '', val)[:10]
        return len(digits) == 10

    assert not test_phone("123"), "Short phone should be invalid"
    assert not test_phone("123456789"), "9 digits should be invalid"
    assert test_phone("9876543210"), "10 digits should be valid"
    assert test_phone("+1 408-555-0192"), "10 digits with formatting should be valid"

    # 3. Email
    def test_email(val):
        gmail_regex = r'^[a-zA-Z0-9._%+-]+@gmail\.com$'
        return bool(re.match(gmail_regex, val.strip(), re.IGNORECASE))

    assert not test_email("test@yahoo.com"), "Non-gmail should be invalid"
    assert not test_email("invalid-email"), "Malformed email should be invalid"
    assert test_email("name@gmail.com"), "name@gmail.com should be valid"
    assert test_email("vikram.sharma123@gmail.com"), "vikram.sharma123@gmail.com should be valid"

    # 4. Address
    def test_address(val):
        return len(val.strip()) >= 15

    assert not test_address("Short address"), "Short address should be invalid"
    assert test_address("42 Blossom Valley Way, Sunnyvale, CA 94087"), "Valid address should pass"

    print("ALL VALIDATION TESTS PASSED PERFECTLY!")

test_validation()
