package school.sptech.neosspringjava.api.controllers.establishmentController;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import school.sptech.neosspringjava.api.dtos.establishmentDTO.EstablishmentRespose;
import school.sptech.neosspringjava.api.dtos.establishmentDTO.EstablishmentRequest;
import school.sptech.neosspringjava.api.mappers.establishmentMapper.EstablishmentMapper;
import school.sptech.neosspringjava.domain.model.establishment.Establishment;
import school.sptech.neosspringjava.domain.repository.establishmentRepository.EstablishmentRepository;
import school.sptech.neosspringjava.domain.repository.localRepository.LocalRepository;
import school.sptech.neosspringjava.service.establishmentService.EstablishmentService;

@RestController
@RequestMapping("/establishments")
@RequiredArgsConstructor
public class EstablishmentController {

  
    private final EstablishmentRepository establishmentRopository;
    private final EstablishmentMapper establishmentMapper;
    private final LocalRepository localRepository;
    private final EstablishmentService establishmentService;


    @GetMapping
    public ResponseEntity<List<EstablishmentRespose>> findAll() {
        return ResponseEntity.ok(establishmentService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EstablishmentRespose> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(establishmentService.findById(id));
    }

    @PostMapping
    public ResponseEntity<EstablishmentRespose> saveEstablishment(@RequestBody EstablishmentRequest establishmentRequest) {
        EstablishmentRespose establishmentResponse = establishmentService.save(establishmentRequest);
        return ResponseEntity.ok(establishmentResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EstablishmentRespose> update(@PathVariable Integer id, @RequestBody EstablishmentRequest establishmentRequest) {
        Optional<Establishment> optionalEstablishment = establishmentRopository.findById(id);
        if (optionalEstablishment.isPresent()) {
            Establishment establishment = optionalEstablishment.get();
            establishment.setName(establishmentRequest.name());
            establishment.setLocal(localRepository.getReferenceById(establishmentRequest.fkLocal()));
            Establishment updatedEstablishment = establishmentRopository.save(establishment);
            return ResponseEntity.ok(establishmentMapper.toEstablishmentResponse(updatedEstablishment));
        } else {
            return ResponseEntity.notFound().build();
        }

    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        establishmentService.delete(id);
    }

  
}
