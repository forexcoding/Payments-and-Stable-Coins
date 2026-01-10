from wallet import StablecoinWallet
from exchange import ExchangeService
from payments import MpesaService, FNBService, USSDService

wallet = StablecoinWallet("User", 100)
exchange = ExchangeService()

amount = wallet.withdraw(20)
fiat_amount = exchange.convert_to_fiat(amount, 18)

mpesa = MpesaService()
result = mpesa.send("0712345678", fiat_amount)

print(result)

