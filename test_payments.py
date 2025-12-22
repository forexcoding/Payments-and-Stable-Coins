from payments import MpesaService

def test_mpesa_payment():
    service = MpesaService()
    result = service.send("0700000000", 100)
    assert "M-Pesa payment" in result
