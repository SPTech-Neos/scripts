package school.sptech.neosspringjava.api.dtos.employee;
import lombok.Builder;

public record EmployeeRequest(String name,
String email,
String password,
Integer fkEstablishment,
Integer fkEmployeeType) {
    
}
