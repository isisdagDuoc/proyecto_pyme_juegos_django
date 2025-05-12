import oracledb
conn = oracledb.connect(
    user="c##grupo3",
    password="oracle",
    dsn="192.168.1.98:1521/XEPDB1"   # ← servicio que SÍ existe
)
print("Conectado a:", conn.version)
conn.close()