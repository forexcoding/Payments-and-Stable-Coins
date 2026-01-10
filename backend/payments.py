class MpesaService:
    def send(self, phone, amount):
        return f"M-Pesa payment of {amount} sent to {phone}"


class FNBService:
    def send(self, account, amount):
        return f"FNB transfer of {amount} sent to {account}"


class USSDService:
    def send(self, user_code, amount):
        return f"USSD wallet credited with {amount} for {user_code}"


