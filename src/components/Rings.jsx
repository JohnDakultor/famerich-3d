import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  // Base animation: Continuous rotation
  useGSAP(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]);
    });

    gsap
      .timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(
        refList.current.map((r) => r.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        },
      );
  }, [position]);

  // Hover effect: Temporary scale increase
  const handleHover = (index) => {
    const ring = refList.current[index];
    if (ring) {
      gsap.to(ring.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleUnhover = (index) => {
    const ring = refList.current[index];
    if (ring) {
      gsap.to(ring.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  };

  // Click effect: Temporary movement and return
  const handleClick = (index) => {
    const ring = refList.current[index];
    if (ring) {
      gsap
        .timeline()
        .to(ring.position, {
          x: ring.position.x + Math.random() * 2 - 1,
          y: ring.position.y + Math.random() * 2 - 1,
          z: ring.position.z + Math.random() * 2 - 1,
          duration: 0.5,
          ease: 'power2.out',
        })
        .to(ring.position, {
          x: position[0],
          y: position[1],
          z: position[2],
          duration: 0.5,
          ease: 'power2.inOut',
        });
    }
  };

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh
            key={index}
            ref={getRef}
            onPointerOver={() => handleHover(index)} // Hover effect
            onPointerOut={() => handleUnhover(index)} // Reset on unhover
            onClick={() => handleClick(index)} // Click effect
          >
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
