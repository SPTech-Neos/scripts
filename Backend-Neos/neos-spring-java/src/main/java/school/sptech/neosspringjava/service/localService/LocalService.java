package school.sptech.neosspringjava.service.localService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.RequiredArgsConstructor;
import school.sptech.neosspringjava.api.dtos.LocalDto.LocalRequest;
import school.sptech.neosspringjava.api.dtos.LocalDto.LocalResponse;
import school.sptech.neosspringjava.api.mappers.localMapper.LocalMapper;
import school.sptech.neosspringjava.domain.model.address.Address;
import school.sptech.neosspringjava.domain.model.local.Local;
import school.sptech.neosspringjava.domain.repository.adressRepository.AddressRepository;
import school.sptech.neosspringjava.domain.repository.localRepository.LocalRepository;
import school.sptech.neosspringjava.service.addressService.AddressService;

@Service
@RequiredArgsConstructor
public class LocalService {

private final LocalRepository localRepository;
    private final LocalMapper localMapper;
    private final AddressRepository addressRepository;

   
    public List<LocalResponse> findAll() {
        return localMapper.toLocalResponse(localRepository.findAll());
    }

    
    public LocalResponse findById( Integer id) {

        try {
            return localMapper.toLocalResponse(localRepository.findById(id).get());
        } catch (Exception e) {
            return null;
        }
    }

   
    public LocalResponse save(LocalRequest localRequest) {
        Address address = addressRepository.findById(localRequest.address()).orElseThrow();
        Local local = Local.builder()
                .number(localRequest.number())
                .floor(localRequest.floor())
                .block(localRequest.block())
                .complement(localRequest.complement())
                .address(address)
                .build();
        return localMapper.toLocalResponse(localRepository.save(local));
    }

    
    public LocalResponse update( Integer id, LocalRequest localRequest) {

        Address address = addressRepository.findById(localRequest.address()).orElseThrow();

        Local local = Local.builder()
                .id(id)
                .number(localRequest.number())
                .floor(localRequest.floor())
                .block(localRequest.block())
                .complement(localRequest.complement())
                .address(address)
                .build();
        return localMapper.toLocalResponse(localRepository.save(local));
    }
  

    
    public void deleteLocal( Integer id) {
        localRepository.deleteById(id);
    }


}
