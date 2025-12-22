from wallet import StablecoinWallet

def test_withdraw():
    wallet = StablecoinWallet("Test", 50)
    withdrawn = wallet.withdraw(20)
    assert withdrawn == 20
    assert wallet.balance == 30

